import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SearchRecipes from "../components/SearchRecipes";

const Recipes = () => {
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
        setRecipes(result.hits);
        console.log("result", result);
      } catch (error) {
        console.error(error);
      }
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
                  {Object.entries(recipe.recipe.totalNutrients).map(
                    ([key, nutrient]) => (
                      <li key={key} className={key}>
                        <span>{nutrient.label}</span>
                        <span>
                          {nutrient.quantity.toFixed(2)} {nutrient.unit}
                        </span>
                      </li>
                    )
                  )}
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
