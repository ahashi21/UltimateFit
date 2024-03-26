import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";

const MyPage = ({ user }) => {
  const [favoritedRecipes, setFavoritedRecipes] = useState([]); // State to store favorited recipes
  const [workoutPlan, setWorkoutPlan] = useState([]); // State to store workout plan

  useEffect(() => {
    // Fetch favorite recipes from backend
    const fetchFavoriteRecipes = async () => {
      try {
        const response = await axios.get("/favorite-recipes", {
          params: { owner_id: user.id }, // Pass user.id to filter by owner_id
        });
        setFavoritedRecipes(response.data);
      } catch (error) {
        console.error("Error fetching favorite recipes:", error);
      }
    };

    // Fetch workout plan from backend
    const fetchWorkoutPlan = async () => {
      try {
        const response = await axios.get("/workout-plan", {
          params: { owner_id: user.id }, // Pass user.id to filter by owner_id
        });
        setWorkoutPlan(response.data);
      } catch (error) {
        console.error("Error fetching workout plan:", error);
      }
    };

    fetchFavoriteRecipes();
    fetchWorkoutPlan();
  }, [user.id]); // Include user.id in the dependency array

  // Function to handle changes in sets, reps, and weight
  const handleChange = (index, key, value) => {
    const updatedPlan = [...workoutPlan];
    updatedPlan[index][key] = Math.max(0, parseInt(value) || 0); // Ensure non-negative integer
    setWorkoutPlan(updatedPlan);
  };

  // Function to save changes to workout plan
  const handleSave = async () => {
    try {
      await Promise.all(
        workoutPlan.map(async (exercise) => {
          const { id, number_of_sets, number_of_reps, weight } = exercise;
          await axios.put(`/workout-plan/${id}`, {
            number_of_sets,
            number_of_reps,
            weight,
          });
        })
      );
      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving workout plan:", error);
      alert("Failed to save changes. Please try again later.");
    }
  };

  // Function to delete an exercise from workout plan
  const handleExerciseDelete = async (index) => {
    const updatedPlan = [...workoutPlan];
    updatedPlan.splice(index, 1); // Remove the exercise at the specified index
    setWorkoutPlan(updatedPlan);

    try {
      // Assuming each exercise has a unique ID in the database
      const deletedExerciseId = workoutPlan[index].id;
      await axios.delete(`/workout-plan/${deletedExerciseId}`);
      alert("Exercise deleted successfully!");
    } catch (error) {
      console.error("Error deleting exercise:", error);
      alert("Failed to delete exercise. Please try again later.");
    }
  };

  // Function to delete a recipe from favorite recipes
  const handleRecipeDelete = async (index) => {
    const updatedFav = [...favoritedRecipes];
    updatedFav.splice(index, 1); // Remove the recipe at the specified index
    setFavoritedRecipes(updatedFav);

    try {
      // Assuming each recipe has a unique ID in the database
      const deletedRecipeId = favoritedRecipes[index].id;
      await axios.delete(`/favorite-recipes/${deletedRecipeId}`);
      alert("Recipe deleted successfully!");
    } catch (error) {
      console.error("Error deleting Recipe:", error);
      alert("Failed to delete recipe. Please try again later.");
    }
  };

  return (
    <Box marginTop="150px">
      <h1>My Workout Plan</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Exercise Name</TableCell>
              <TableCell>Body Part</TableCell>
              <TableCell>Sets</TableCell>
              <TableCell>Reps</TableCell>
              <TableCell>Weight (lbs)</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render each exercise in workout plan */}
            {workoutPlan.map((exercise, index) => (
              <TableRow key={index}>
                <TableCell>
                  <a href={exercise.exercise_url}>{exercise.exercise_name}</a>
                </TableCell>
                <TableCell>{exercise.exercise_bodypart}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={exercise.number_of_sets}
                    onChange={(e) =>
                      handleChange(index, "number_of_sets", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={exercise.number_of_reps}
                    onChange={(e) =>
                      handleChange(index, "number_of_reps", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={exercise.weight}
                    onChange={(e) =>
                      handleChange(index, "weight", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleExerciseDelete(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Button to save changes */}
      <Button variant="contained" onClick={handleSave}>
        Save Changes
      </Button>

      <div />

      <h1 marginTop="40px">My Favorite Recipes</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Recipe Name</TableCell>
              <TableCell>Diet</TableCell>
              <TableCell>Calories (Kcal)</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render each favorite recipe */}
            {favoritedRecipes.map((recipe, index) => (
              <TableRow key={index}>
                <TableCell>
                  <a href={recipe.recipe_url}>{recipe.recipe_label}</a>
                </TableCell>
                <TableCell>
                  {" "}
                  {recipe.recipe_dietLabels
                    ? recipe.recipe_dietLabels.join(", ")
                    : ""}
                </TableCell>
                <TableCell>
                  {parseFloat(recipe.recipe_calories).toFixed(2)}
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleRecipeDelete(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyPage;
