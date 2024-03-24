import React from "react";
import axios from "axios"; // Import Axios
import { Button } from "@mui/material";

const AddWorkoutPlan = ({ onAddToWorkoutPlan, exercise }) => {
  // Function to handle adding exercise to workout plan
  const handleAddToWorkoutPlan = async () => {
    try {
      // Prepare the data to be sent in the POST request
      const requestData = {
        owner_id: 1, // Replace with the actual owner ID
        exercise_id: exercise.id, // Assuming exercise.id contains the ID of the exercise
      };

      // Add sets, reps, and weight to the request data if they are provided
      if (exercise.sets) requestData.number_of_sets = exercise.sets;
      if (exercise.reps) requestData.number_of_reps = exercise.reps;
      if (exercise.weight) requestData.weight = exercise.weight;

      // Make POST request to add exercise to workout plan
      await axios.post("/workout-plan", requestData);

      // Call the function passed from the parent component
      onAddToWorkoutPlan(exercise.id);
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
