// MyRecipeFav.js
import React, { useState } from "react";
import { Box } from "@mui/material";
import RecipeFav from "../components/RecipeFav"; // Import RecipeFav component

const MyRecipeFav = () => {
  // State to store favorite recipes
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Function to toggle favorite status of a recipe
  const toggleFavorite = (recipe) => {
    if (favoriteRecipes.includes(recipe)) {
      setFavoriteRecipes(favoriteRecipes.filter((item) => item !== recipe));
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipe]);
    }
  };

  return (
    <Box>
      <h1>My Favorite Recipes</h1>
      {/* Render RecipeFav component for each favorite recipe */}
      {favoriteRecipes.map((recipe) => (
        <div className="recipe-box" key={recipe.uri}>
          <div className="recipe-image">
            <img src={recipe.image} alt="Recipe" />
          </div>
          <div className="recipe-details">
            <h3 className="recipe-title">
              <a href={recipe.url}>{recipe.label}</a>
            </h3>
            <RecipeFav
              isFavorited={true} // Always show as favorited on My Favorite Recipes page
              toggleFavorite={() => toggleFavorite(recipe)}
            />
          </div>
        </div>
      ))}
    </Box>
  );
};

export default MyRecipeFav;
