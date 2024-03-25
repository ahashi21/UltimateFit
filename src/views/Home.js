import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import video1 from "../assets/video1.mp4";
import "../App.css";

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
      position="relative"
    >
      <video autoPlay muted loop className="background-video">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box className="fixed-buttons-container">
        <Button
          variant="contained"
          sx={{
            bgcolor: '#12AF57',
            color: '#fff',
            marginRight: "10px", // Add margin to the right
            "&:hover": {
              bgcolor: '#fff',
              color: '#12AF57'
            }
          }}
          onClick={handleExerciseClick}
        >
          Exercises
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#12AF57',
            color: '#fff',
            "&:hover": {
              bgcolor: '#fff',
              color: '#12AF57'
            }
          }}
          onClick={handleRecipeClick}
        >
          Recipes
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
