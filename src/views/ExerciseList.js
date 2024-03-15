import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const ExerciseList = () => {
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
      />
    </Box>
  );
};

export default ExerciseList;

//add a button to send the exercise to the workout plan table
