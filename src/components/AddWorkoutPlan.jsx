import React from "react";
import { Button } from "@mui/material";

const AddWorkoutPlan = ({ onAddToWorkoutPlan }) => {
  const handleClick = () => {
    // Call the function to add exercise to workout plan
    onAddToWorkoutPlan();
  };

  return (
    <Button
      onClick={handleClick}
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
