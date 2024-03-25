import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Home from "./views/Home";
import ExerciseDetail from "./views/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseList from "./views/ExerciseList";
import MyPage from "./views/MyPage";
import Recipes from "./views/Recipes";
import RegisterSignIn from "./views/RegisterSignIn";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  //Function to add recipe to favorite recipe
  const onAddToFavoriteRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };
  console.log("recipes", recipes);

  // Function to add exercise to workout plan
  const onAddToWorkoutPlan = (exercise) => {
    setExercises([...exercises, exercise]);
  };
  console.log("exercises", exercises);

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exercise/:id"
          element={<ExerciseDetail onAddToWorkoutPlan={onAddToWorkoutPlan} />}
        />
        <Route
          path="/exercises"
          element={<ExerciseList onAddToWorkoutPlan={onAddToWorkoutPlan} />}
        />
        <Route
          path="/login"
          element={
            <RegisterSignIn
              isAuthenticated={isAuthenticated}
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path="/mypage"
          element={<MyPage exercises={exercises} recipes={recipes} />}
        />
        <Route
          path="/recipes"
          element={<Recipes onAddToFavoriteRecipe={onAddToFavoriteRecipe} />}
        />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
