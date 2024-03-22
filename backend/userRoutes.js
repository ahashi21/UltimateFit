const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("./db/database"); // Import PostgreSQL database connection

const router = express.Router();

// Register endpoint
router.post("/register", async (req, res) => {
  console.log("Register request received"); // Log that register request is received
  const { name, email, password } = req.body;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user data into the database
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );
    console.log("Registration success:", result.rows[0]); // Log registration success
    // Send response with newly created user data
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  console.log("Login request received"); // Log that login request is received
  const { email, password } = req.body;
  try {
    // Query the database to retrieve user data based on email
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    // If no user found with the provided email
    if (result.rows.length === 0) {
      console.log("User not found"); // Log that user is not found
      return res.status(404).json({ error: "User not found" });
    }
    const user = result.rows[0];
    // Compare the hashed password with the provided password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // If passwords match, send response with user data
    if (isPasswordValid) {
      console.log("Login success:", user); // Log login success
      res.status(200).json({
        message: "Login successful",
        user: { id: user.id, name: user.name, email: user.email },
      });
    } else {
      // If passwords don't match, send error response
      console.log("Invalid credentials"); // Log invalid credentials
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
