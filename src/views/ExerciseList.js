import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const ExerciseList = ({ onAddToWorkoutPlan, OwnerId }) => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  /* const searchButtonStyle = {
    backgroundColor: "green",
  };*/

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
        OwnerId={OwnerId}
      />
    </Box>
  );
};

export default ExerciseList;
