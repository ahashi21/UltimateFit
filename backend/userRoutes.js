const { getUserWithEmail } = require("./db/database");

const express = require("express");
const bcrypt = require("bcrypt");
const { pool } = require("./db/database"); // Destructure the pool property from the database module
const router = express.Router();

// Register endpoint
router.post("/register", async (req, res) => {
  console.log("Register request received");
  const { name, email, password } = req.body;
  try {
    // Check if user with the provided email already exists
    const existingUser = await getUserWithEmail(email);
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exists. Please sign in instead." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );
    console.log("Registration success:", result.rows[0]);
    res
      .status(201)
      .json({ message: "Registration successful. Please sign in." });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  console.log("Login request received");
  const { email, password } = req.body;
  try {
    const user = await getUserWithEmail(email);
    if (!user) {
      return res.status(404).json({ error: "Invalid email or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("password", password);
    console.log("user.password", user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    console.log("Login success:", user);
    res.status(200).json({
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch user data
router.get("/user", async (req, res) => {
  try {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
      // If authenticated, fetch user data from the database
      const { id, name, email } = req.user; // Assuming user object has id, name, and email properties
      res.status(200).json({
        isAuthenticated: true,
        user: { id, name, email }, // Return only necessary user data
      });
    } else {
      // If not authenticated, return null for the user
      res.status(200).json({
        isAuthenticated: false,
        user: null,
      });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// WORKOUT PLAN

// Route to fetch workout plan from the database
router.get("/workout-plan", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM workout_plan WHERE owner_id = $1",
      [req.query.owner_id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching workout plan:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to add workout plan to the database
router.post("/workout-plan", async (req, res) => {
  const {
    owner_id,
    exercise_id,
    exercise_name,
    exercise_bodypart,
    exercise_url,
    number_of_sets,
    number_of_reps,
    weight,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO workout_plan (owner_id, exercise_id, exercise_name, exercise_bodypart, exercise_url, number_of_sets, number_of_reps, weight) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        owner_id,
        exercise_id,
        exercise_name,
        exercise_bodypart,
        exercise_url,
        number_of_sets,
        number_of_reps,
        weight,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding workout plan:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to save changes to workout plan in the database
router.put("/workout-plan/:id", async (req, res) => {
  const id = req.params.id; // Exercise ID
  const { number_of_sets, number_of_reps, weight } = req.body;

  try {
    const result = await pool.query(
      "UPDATE workout_plan SET number_of_sets = $1, number_of_reps = $2, weight = $3 WHERE id = $4 RETURNING *",
      [number_of_sets, number_of_reps, weight, id]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating workout plan:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to delete an exercise from workout plan in the database
router.delete("/workout-plan/:id", async (req, res) => {
  const id = req.params.id; // Exercise ID

  try {
    await pool.query("DELETE FROM workout_plan WHERE id = $1", [id]);
    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    console.error("Error deleting exercise from workout plan:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch a workout plan by ID
router.get("/workout-plan/:id", async (req, res) => {
  const exerciseId = req.params.id; // Extract the exercise ID from the request parameters

  try {
    // Query the database to fetch the workout plan with the specified ID
    const result = await pool.query(
      "SELECT * FROM workout_plan WHERE id = $1",
      [exerciseId]
    );

    // Check if a workout plan with the specified ID was found
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Workout plan not found" }); // Return a 404 error if not found
    }

    // If found, return the workout plan in the response
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching workout plan by ID:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// RECIPES

router.get("/favorite-recipes", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM fav_recipes WHERE owner_id = $1",
      [req.query.owner_id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching favorite recipes:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to add favorite recipe to the database
router.post("/favorite-recipes", async (req, res) => {
  const {
    owner_id,
    recipes_id,
    recipe_label,
    recipe_url,
    recipe_dietLabels,
    recipe_calories,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO fav_recipes (owner_id, recipes_id, recipe_label, recipe_url, recipe_dietLabels, recipe_calories) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING *",
      [
        owner_id,
        recipes_id,
        recipe_label,
        recipe_url,
        recipe_dietLabels,
        recipe_calories,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding favorite recipe:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to delete a recipe from favorite recipes
router.delete("/favorite-recipes/:id", async (req, res) => {
  const id = req.params.id; // Exercise ID

  try {
    await pool.query("DELETE FROM fav_recipes WHERE id = $1", [id]);
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error(
      "Error deleting recipe from favorite recipes:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
