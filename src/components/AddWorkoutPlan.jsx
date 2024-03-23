import React from "react";
import axios from "axios"; // Import Axios
import { Button } from "@mui/material";

const AddWorkoutPlan = ({ onAddToWorkoutPlan }) => {
  // Function to handle adding exercise to workout plan
  const handleAddToWorkoutPlan = async () => {
    try {
      // Make POST request to add exercise to workout plan
      await axios.post("/workout-plan", {
        // Pass any necessary data to the backend here
      });
      // Call the function passed from the parent component
      onAddToWorkoutPlan();
      alert("Exercise added to workout plan successfully!");
    } catch (error) {
      console.error("Error adding exercise to workout plan:", error);
      alert("Failed to add exercise to workout plan. Please try again later.");
    }
  };

  return (
    <Button
      onClick={handleAddToWorkoutPlan}
      sx={{
        background: "#FFF2DB",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
      }}
    >
      Add to my workout
    </Button>
  );
};

export default AddWorkoutPlan;
