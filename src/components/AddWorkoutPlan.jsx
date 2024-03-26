import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import userEvent from "@testing-library/user-event";

const AddWorkoutPlan = ({ exercise, user, onAddToWorkoutPlan }) => {
  const [isExerciseAdded, setIsExerciseAdded] = useState(false);

  useEffect(() => {
    // Check if the exercise already exists in the workout plan
    const checkExerciseExistence = async () => {
      try {
        const response = await axios.get(`/workout-plan/${exercise.id}`);
        setIsExerciseAdded(response.data.exists);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Exercise not found
          console.error("Exercise not found:", error);
        } else {
          // Other errors
          console.error("Error checking exercise existence:", error);
        }
      }
    };

    checkExerciseExistence();
  }, [exercise.id]);

  const handleAddToWorkoutPlan = async () => {
    try {
      // Check if the exercise already exists in the workout plan
      if (isExerciseAdded) {
        alert("Exercise already added to workout plan.");
        return;
      }
      const requestData = {
        owner_id: user.id,
        exercise_id: exercise.id,
        exercise_name: exercise.name,
        exercise_bodypart: exercise.bodyPart,
        exercise_url: exercise.gifUrl,
      };

      if (exercise.sets) requestData.number_of_sets = exercise.sets;
      if (exercise.reps) requestData.number_of_reps = exercise.reps;
      if (exercise.weight) requestData.weight = exercise.weight;

      await axios.post("/workout-plan", requestData);

      setIsExerciseAdded(true);
      onAddToWorkoutPlan(exercise.id);
      alert("Exercise added to workout plan successfully!");
    } catch (error) {
      console.error("Error adding exercise to workout plan:", error);
      alert("Failed to add exercise to workout plan. Please try again later.");
    }
  };

  const handleExerciseDelete = async () => {
    try {
      const response = await axios.delete(`/workout-plan/${exercise.id}`);
      if (response.status === 200) {
        setIsExerciseAdded(false);
        alert("Exercise deleted from workout plan successfully!");
      } else {
        alert(
          "Failed to delete exercise from workout plan. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error deleting exercise from workout plan:", error);
      alert(
        "Failed to delete exercise from workout plan. Please try again later."
      );
    }
  };

  return (
    <Button
      onClick={isExerciseAdded ? handleExerciseDelete : handleAddToWorkoutPlan}
      sx={{
        background: "#FFF2DB",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
      }}
    >
      {isExerciseAdded ? "Delete from my workout" : "Add to my workout"}
    </Button>
  );
};

export default AddWorkoutPlan;
