// MyPage.js
import React, { useState } from 'react';
import RecipeFav from '../components/RecipeFav'; // Import RecipeFav component
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const MyPage = () => {
  const [favoritedRecipes, setFavoritedRecipes] = useState([]); // State to store favorited recipes

  // Function to toggle favorite status of a recipe
  const toggleFavorite = (recipe) => {
    if (favoritedRecipes.includes(recipe)) {
      setFavoritedRecipes(favoritedRecipes.filter((item) => item !== recipe));
    } else {
      setFavoritedRecipes([...favoritedRecipes, recipe]);
    }
} from "@mui/material";

const Mypage = () => {
  const [workoutPlan, setWorkoutPlan] = useState([]);

  const addExerciseToPlan = (exercise) => {
    setWorkoutPlan([...workoutPlan, exercise]);
  };

  return (
    <Box>
      <h1>My Favorite Recipes</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Recipe Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render RecipeFav component for each favorited recipe */}
            {favoritedRecipes.map((recipe, index) => (
              <TableRow key={index}>
                <TableCell>{recipe.name}</TableCell>
                <TableCell>
                  {/* Render RecipeFav component with toggleFavorite function */}
                  <RecipeFav
                    isFavorited={favoritedRecipes.includes(recipe)}
                    toggleFavorite={() => toggleFavorite(recipe)}
                  />
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
