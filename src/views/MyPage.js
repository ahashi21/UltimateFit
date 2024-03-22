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

const MyPage = () => {
  const [favoritedRecipes, setFavoritedRecipes] = useState([]); // State to store favorited recipes
  const [workoutPlan, setWorkoutPlan] = useState([]); // State to store workout plan

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
    // Assuming exercise object comes with id and name fields
    const sets = parseInt(prompt("Enter the number of sets:", "0"), 10);
    const reps = parseInt(prompt("Enter the number of reps:", "0"), 10);
    const weight = parseInt(prompt("Enter the weight (in lbs):", "0"), 10);

    // Check if user input is valid
    if (!isNaN(sets) && !isNaN(reps) && !isNaN(weight)) {
      setWorkoutPlan([...workoutPlan, { ...exercise, sets, reps, weight }]);
    } else {
      alert("Please enter valid numbers for sets, reps, and weight.");
    }
  };

  return (
    <Box>
      <h1>My Favorite Recipes</h1>
      {/* Code for displaying favorite recipes */}

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
                <TableCell>{exercise.sets}</TableCell>
                <TableCell>{exercise.reps}</TableCell>
                <TableCell>{exercise.weight}</TableCell>
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

      {/* Button to add exercise to workout plan */}
      <Button
        onClick={() => addExerciseToPlan({ id: 1, name: "Example Exercise" })}
      >
        Add Exercise
      </Button>
    </Box>
  );
};

export default MyPage;
