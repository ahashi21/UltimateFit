// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add CORS middleware if necessary
const userRoutes = require("./userRoutes"); // Import your user routes file
const pool = require("./db/database"); // Import your database connection

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS if your frontend is hosted on a different domain
app.use(bodyParser.json()); // Parse JSON request bodies

// Mount your user routes
app.use("/", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
