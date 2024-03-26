import React, { useState } from "react";
import { Box } from "@mui/material";
import "../App.css"; // Import CSS file
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const ExerciseList = ({ onAddToWorkoutPlan, OwnerId }) => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      {/* SearchExercises component with applied class */}
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        className="searchButton" // Apply CSS class to the search button
      />
      {/* Exercises component */}
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        onAddToWorkoutPlan={onAddToWorkoutPlan}
        buttonStyle={{}} // Clear previous inline style
        buttonClassName="buttonHoverEffect" // Apply the CSS class
        OwnerId={OwnerId}
      />
    </Box>
  );
};

export default ExerciseList;
