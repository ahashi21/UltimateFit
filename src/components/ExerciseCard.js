import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import AddWorkoutPlan from "./AddWorkoutPlan";

const ExerciseCard = ({ exercise, onAddToWorkoutPlan }) => {
  // const handleAddToWorkoutPlan = () => {
  //   // Make POST request to add exercise to workout plan
  //   fetch("/api/workout_plan", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       exerciseId: exercise.id,
  //     }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to add exercise to workout plan");
  //       }
  //       // Call the onAddToWorkoutPlan callback
  //       onAddToWorkoutPlan(exercise);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  return (
    <div className="exercise-card">
      <Link to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#FFA9A9",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#FCC757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Link>
      <AddWorkoutPlan exercise={exercise} onAddToWorkoutPlan={onAddToWorkoutPlan} >Add to Workout Plan</AddWorkoutPlan>
    </div>
  );
};

export default ExerciseCard;
