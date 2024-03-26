import React, { useState, useEffect} from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./views/ExerciseDetail";
import ExerciseList from "./views/ExerciseList";
import MyPage from "./views/MyPage";
import Recipes from "./views/Recipes";
import Home from "./views/Home";
import Auth from "./components/Auth";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the backend or local storage upon component mount
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/login");
        setUser(response.data.user);
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error here, such as setting user to null
        setUser(null);
      }
    };

    fetchUserData();
  }, []);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions, such as clearing user data and resetting authentication status
    setIsAuthenticated(false);
    // Additional logout logic can be added here, such as redirecting to the login page or clearing local storage
    navigate("/");
  };

  // Function to add recipe to favorite recipe
  const onAddToFavoriteRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  // Function to add exercise to workout plan
  const onAddToWorkoutPlan = (exercise) => {
    setExercises([...exercises, exercise]);
  };
  console.log("User:", user); // Log the user object
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
        setUser={setUser}
        user={user}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exercise/:id"
          element={
            <ExerciseDetail
              onAddToWorkoutPlan={onAddToWorkoutPlan}
              isAuthenticated={isAuthenticated}
              user={user}
            />
          }
        />
        <Route
          path="/exercises"
          element={
            <ExerciseList
              onAddToWorkoutPlan={onAddToWorkoutPlan}
              isAuthenticated={isAuthenticated}
              user={user}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Auth handleLogin={handleLogin} setUser={setUser} user={user} />
          }
        />
        <Route
          path="/mypage"
          element={
            <MyPage exercises={exercises} recipes={recipes} user={user} />
          }
        />
        <Route
          path="/recipes"
          element={
            <Recipes
              onAddToFavoriteRecipe={onAddToFavoriteRecipe}
              isAuthenticated={isAuthenticated}
              user={user}
            />
          }
        />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
