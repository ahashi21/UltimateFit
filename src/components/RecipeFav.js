import React from "react";

const RecipeFav = ({ recipe, isFavorited, toggleFavorite }) => {
  const handleToggleFavorite = async () => {
    // Toggle favorite locally
    toggleFavorite(recipe);
    // Toggle favorite on the server
    try {
      const response = await fetch("/favorite-recipes", {
        method: isFavorited ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId: recipe.id }), // Assuming recipe has an id field
      });
      if (!response.ok) {
        throw new Error("Failed to toggle favorite");
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      // Revert local toggle if server operation fails
      toggleFavorite(recipe);
    }
  };

  return (
    <div className="recipe-fav">
      {/* Conditionally render different buttons based on whether recipe is favorited */}
      {isFavorited ? (
        <button onClick={handleToggleFavorite}>Remove from Favorites</button>
      ) : (
        <button onClick={handleToggleFavorite}>Add to Favorites</button>
      )}
    </div>
  );
};

export default RecipeFav;
