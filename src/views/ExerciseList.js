import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const ExerciseList = ({ onAddToWorkoutPlan, isAuthenticated, user }) => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        onAddToWorkoutPlan={onAddToWorkoutPlan}
        buttonStyle={{ backgroundColor: "12AF57" }} // Inline style for the button
        isAuthenticated={isAuthenticated}
        user={user}
      />
    </Box>
  );
};

export default ExerciseList;
