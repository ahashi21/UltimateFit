import React from "react";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleExerciseClick = () => {
    navigate("/exercises");
  };

  const handleRecipeClick = () => {
    navigate("/recipes");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Link style={{ marginRight: "10px" }} onClick={handleExerciseClick}>
        <img
          src="/assets/images/exercise_photo.png"
          alt="Exercises"
          style={{ width: "70%", maxWidth: "400px", cursor: "pointer" }}
          title="Exercises"
        />
      </Link>
      <Link style={{ marginLeft: "10px" }} onClick={handleRecipeClick}>
        <img
          src="/assets/images/recipe_photo.png"
          alt="Recipes"
          style={{ width: "70%", maxWidth: "400px", cursor: "pointer" }}
          title="Recipes"
        />
      </Link>
    </Box>
  );
};

export default Home;
