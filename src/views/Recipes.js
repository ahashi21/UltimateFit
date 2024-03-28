import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SearchRecipes from "../components/SearchRecipes";
import RecipeFav from "../components/RecipeFav"; // Import RecipeFav component
import "../App.css"; // Assuming you have a CSS file for styling

const Recipes = ({ recipe, onAddToFavoriteRecipe, user, isAuthenticated }) => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchRecipesData = async () => {
      const url =
        "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&ingr=1-100000";
      const options = {
        method: "GET",
        headers: {
          "Accept-Language": "en",
          "X-RapidAPI-Key":
            "98afb56a22msh04fe5810ae5fe29p126885jsn62a1e134f012",
          "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
        },
      };

      let fetchedRecipes = [];
      let uniqueRecipes = [];

      try {
        do {
          const response = await fetch(url, options);
          const result = await response.json();
          fetchedRecipes = result.hits;
          uniqueRecipes = fetchedRecipes.filter(
            (hit, index, self) =>
              index ===
              self.findIndex((t) => t.recipe.label === hit.recipe.label)
          );
        } while (uniqueRecipes.length < 10); // Ensure at least 20 unique recipes

        setRecipes(uniqueRecipes);
      } catch (error) {}
    };

    fetchRecipesData();
  }, []);

  // Helper function to chunk the recipes into arrays of 2
  const chunkRecipes = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <>
      <Box>
        <SearchRecipes
          setRecipes={setRecipes}
          category={category}
          setCategory={setCategory}
          className="search-button" // make it green
        />

        {/* Map over the chunked recipes array */}
        <div className="all-recipes">
          {chunkRecipes(recipes, 2).map((recipePair, index) => (
            <div className="recipe-row" key={index}>
              {recipePair.map((recipe) => (
                <div className="recipe-box" key={recipe.recipe.uri}>
                  <div className="recipe-image">
                    <img src={recipe.recipe.image} alt="Recipe" />
                    <div className="servings">
                      {recipe.recipe.yield} servings
                    </div>
                    <div className="calories">
                      {recipe.recipe.calories.toFixed(2)} kcal
                    </div>
                  </div>
                  <div className="recipe-details">
                    <h3 className="recipe-title">
                      <a href={recipe.recipe.url}>{recipe.recipe.label}</a>
                    </h3>
                    {isAuthenticated && (
                      <RecipeFav
                        recipe={recipe}
                        onAddToFavoriteRecipe={onAddToFavoriteRecipe}
                        isAuthenticated={isAuthenticated}
                        user={user}
                      >
                        Add to Favorite Recipes
                      </RecipeFav>
                    )}

                    <div className="recipe-labels">
                      {recipe.recipe.dietLabels
                        .concat(recipe.recipe.healthLabels)
                        .map((label) => (
                          <span key={label}>{label}</span>
                        ))}
                    </div>
                    <div className="recipe-nutrition">
                      <ul className="nutrients">
                        {Object.entries(recipe.recipe.totalNutrients)
                          .sort(
                            ([, nutrientA], [, nutrientB]) =>
                              nutrientB.quantity - nutrientA.quantity
                          )
                          .slice(0, 10)
                          .map(([key, nutrient]) => (
                            <li key={key} className={key}>
                              <span>{nutrient.label}</span>
                              <span>
                                {nutrient.quantity.toFixed(2)} {nutrient.unit}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Recipes;
