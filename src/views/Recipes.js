import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SearchRecipes from "../components/SearchRecipes";
import RecipeFav from "../components/RecipeFav"; // Import RecipeFav component
import "../App.css"; // Assuming you have a CSS file for styling

const Recipes = ({ recipe, onAddToFavoriteRecipe, OwnerId }) => {
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
            "177ed6bc56mshdb0536d4d73cf38p1a682fjsn9405fee34da6",
          "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("result", result);
        setRecipes(result.hits);
      } catch (error) {}
    };

    fetchRecipesData();
  }, []);

  return (
    <>
      <Box>
        <SearchRecipes
          setRecipes={setRecipes}
          category={category}
          setCategory={setCategory}
        />

        {recipes.map((recipe) => (
          <div className="recipe-box" key={recipe.recipe.uri}>
            <div className="recipe-image">
              <img src={recipe.recipe.image} alt="Recipe" />
            </div>
            <div className="recipe-details">
              <h3 className="recipe-title">
                <a href={recipe.recipe.url}>{recipe.recipe.label}</a>
              </h3>
              {/* Render RecipeFav component for each recipe */}
              <RecipeFav
                recipe={recipe}
                onAddToFavoriteRecipe={onAddToFavoriteRecipe}
              >
                Add to Favorite Recipes
              </RecipeFav>
              <div className="recipe-labels">
                {recipe.recipe.dietLabels
                  .concat(recipe.recipe.healthLabels)
                  .map((label) => (
                    <span key={label}>{label}</span>
                  ))}
              </div>
              <div className="recipe-nutrition">
                <div className="servings">{recipe.recipe.yield} servings</div>
                <div className="calories">{recipe.recipe.calories} kcal</div>
                <ul className="nutrients">
                  {Object.entries(recipe.recipe.totalNutrients)
                    .sort(
                      ([, nutrientA], [, nutrientB]) =>
                        nutrientB.quantity - nutrientA.quantity
                    ) // Sort by quantity in descending order
                    .slice(0, 10) // Take only the first six entries
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
      </Box>
    </>
  );
};

export default Recipes;
