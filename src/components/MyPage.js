// MyPage.js
import React, { useState, useEffect } from 'react';
import RecipeFav from '../components/RecipeFav'; // Import RecipeFav component (adjust import path as needed)

const MyPage = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]); // State to store favorite recipes

  // Fetch favorite recipes from the backend when component mounts
  useEffect(() => {
    // Make an API call to fetch favorite recipes from the backend
    // Replace this placeholder with actual code to fetch data
    // Example:
    // fetchFavoriteRecipes().then((data) => setFavoriteRecipes(data));
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h1>My Favorite Recipes</h1>
      <div>
        {/* Render RecipeFav component for each favorite recipe */}
        {favoriteRecipes.map((recipe, index) => (
          <RecipeFav key={index} recipe={recipe} /> // Pass recipe data as props to RecipeFav component
        ))}
      </div>
    </div>
  );
};

export default MyPage;
