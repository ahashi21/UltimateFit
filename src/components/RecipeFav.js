import React from "react";
import axios from "axios"; // Import Axios
import { Button } from "@mui/material";

const RecipeFav = ({ recipe, onAddToFavoriteRecipe, OwnerId }) => {
  const handleRecipeFav = async () => {
    console.log("recipe", recipe);
    console.log("recipe.recipe.uri", recipe.recipe.uri);
    console.log("recipe.recipe.label", recipe.recipe.label);
    try {
      // Prepare the data to be sent in the POST request
      const requestData = {
        owner_id: OwnerId, // Replace with the actual owner ID
        recipes_id: recipe.recipe.uri,
        recipe_label: recipe.recipe.label,
        recipe_url: recipe.recipe.url,
        recipe_dietLabels: recipe.recipe.dietLabels,
        recipe_calories: recipe.recipe.calories,
      };
      console.log("requestData", requestData);

      // Make POST request to add exercise to workout plan
      await axios.post("/favorite-recipes", requestData);

      // Call the function passed from the parent component
      onAddToFavoriteRecipe(recipe.recipe.uri);
      alert("Recipe added to favorite recipes successfully!");
    } catch (error) {
      console.error("Error adding recipe to favorite recipes:", error);
      alert(
        "Failed to add recipe to favorite recipes. Please try again later."
      );
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
