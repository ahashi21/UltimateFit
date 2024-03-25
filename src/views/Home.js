import React from "react";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import video1 from "../assets/video1.mp4";
import "../App.css"; // Import CSS file for additional styling

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
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >

      <video autoPlay muted loop className="background-video">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box mt={-80}>
        <Link style={{ marginRight: "10px" }} onClick={handleExerciseClick}>
          <img
            src="/exercise_photo.jpg" // Path to your exercise photo
            alt="Exercises"
            style={{ width: "70%", maxWidth: "400px", cursor: "pointer" }}
            title="Exercises"
          />
        </Link>
        <Link style={{ marginLeft: "10px" }} onClick={handleRecipeClick}>
          <img
            src="/recipe_photo.jpg" // Path to your recipe photo
            alt="Recipes"
            style={{ width: "70%", maxWidth: "400px", cursor: "pointer" }}
            title="Recipes"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
