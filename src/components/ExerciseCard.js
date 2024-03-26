import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import AddWorkoutPlan from "./AddWorkoutPlan";

const ExerciseCard = ({ exercise, onAddToWorkoutPlan, isAuthenticated, user }) => {
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
      {isAuthenticated && ( // Corrected the conditional rendering syntax
        <AddWorkoutPlan
          exercise={exercise}
          onAddToWorkoutPlan={onAddToWorkoutPlan}
          user={user}
        >
          {/* Add to Workout Plan */}
        </AddWorkoutPlan>
      )}
    </div>
  );
};

export default ExerciseCard;
