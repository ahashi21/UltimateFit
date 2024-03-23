const express = require("express");
const bcrypt = require("bcrypt");
const { pool } = require("./db/database"); // Destructure the pool property from the database module
const router = express.Router();

// Register endpoint
router.post("/register", async (req, res) => {
  console.log("Register request received");
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );
    console.log("Registration success:", result.rows[0]);
    res.status(201).json(result.rows[0]);
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
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }
    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      console.log("Login success:", user);
      res.status(200).json({
        message: "Login successful",
        user: { id: user.id, name: user.name, email: user.email },
      });
    } else {
      console.log("Invalid credentials");
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch workout plan from the database
router.get("/workout-plan", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM workout_plan");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching workout plan:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch favorite recipes from the database
router.get("/favorite-recipes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM fav_recipes");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching favorite recipes:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
