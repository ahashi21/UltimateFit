import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";

const MyPage = () => {
  const [favoritedRecipes, setFavoritedRecipes] = useState([]); // State to store favorited recipes
  const [workoutPlan, setWorkoutPlan] = useState([]); // State to store workout plan

  useEffect(() => {
    // Fetch favorite recipes from backend
    const fetchFavoriteRecipes = async () => {
      try {
        const response = await fetch("/favorite-recipes");
        const data = await response.json();
        setFavoritedRecipes(data);
      } catch (error) {
        console.error("Error fetching favorite recipes:", error);
      }
    };

    fetchFavoriteRecipes();
  }, []);

  // Function to toggle favorite status of a recipe
  const toggleFavorite = (recipe) => {
    if (favoritedRecipes.includes(recipe)) {
      setFavoritedRecipes(favoritedRecipes.filter((item) => item !== recipe));
    } else {
      setFavoritedRecipes([...favoritedRecipes, recipe]);
    }
  };

  // Function to add exercise to workout plan with user input
  const addExerciseToPlan = (exercise) => {
    setWorkoutPlan([
      ...workoutPlan,
      { ...exercise, sets: 0, reps: 0, weight: 0 },
    ]);
  };

  // Function to handle changes in sets, reps, and weight
  const handleChange = (index, key, value) => {
    const updatedPlan = [...workoutPlan];
    updatedPlan[index][key] = Math.max(0, parseInt(value) || 0); // Ensure non-negative integer
    setWorkoutPlan(updatedPlan);
  };

  return (
    <Box>
      <h1>My Workout Plan</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Exercise Name</TableCell>
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
                <TableCell>{exercise.name}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={exercise.sets}
                    onChange={(e) =>
                      handleChange(index, "sets", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={exercise.reps}
                    onChange={(e) =>
                      handleChange(index, "reps", e.target.value)
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
                  <Button
                    onClick={() =>
                      setWorkoutPlan(
                        workoutPlan.filter((item, i) => i !== index)
                      )
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h1>My Favorite Recipes</h1>
      {/* Display favorite recipes as a list */}
      <List>
        {favoritedRecipes.map((recipe, index) => (
          <ListItem key={index} button onClick={() => toggleFavorite(recipe)}>
            <ListItemText primary={recipe.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MyPage;
