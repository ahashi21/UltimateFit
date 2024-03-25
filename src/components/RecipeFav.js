import React from "react";
import axios from "axios"; // Import Axios
import { Button } from "@mui/material";

const RecipeFav = ({ recipe, onAddToFavoriteRecipe, OwnerId }) => {
  const handleRecipeFav = async () => {
    console.log("recipe", recipe);
    console.log("recipe.recipe.uri", recipe.recipe.uri);
    try {
      // Prepare the data to be sent in the POST request
      const requestData = {
        owner_id: OwnerId, // Replace with the actual owner ID
        recipes_id: recipe.recipe.uri,
        recipes_label: recipe.recipe.label,
        recipes_url: recipe.recipe.url,
        recipe_dietLabels: recipe.recipe.dietLabels,
        recipe_calories: recipe.recipe.calories,
      };

      // Make POST request to add exercise to workout plan
      await axios.post("/favorite-recipes", requestData);

      // Call the function passed from the parent component
      onAddToFavoriteRecipe(recipe.recipe.uri);
      alert("Exercise added to workout plan successfully!");
    } catch (error) {
      console.error("Error adding exercise to workout plan:", error);
      alert("Failed to add exercise to workout plan. Please try again later.");
    }
  };

  return (
    <div className="recipe-fav">
      <Button
        onClick={handleRecipeFav}
        sx={{
          background: "#FFF2DB",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
        }}
      >
        Add to my favorite list
      </Button>
    </div>
  );
};

export default RecipeFav;
