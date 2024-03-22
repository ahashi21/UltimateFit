import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const ExerciseList = ({ onAddToWorkoutPlan }) => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  console.log("onAddToWorkoutPlan", onAddToWorkoutPlan);

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
      />
    </Box>
  );
};

export default ExerciseList;
