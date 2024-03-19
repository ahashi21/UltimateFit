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
          <div className="nutr-block" key={recipe.recipe.uri}>
            <div className="row">
              <div className="col-md-4">
                <div className="recipe-ico">
                  <img src={recipe.recipe.image} alt="Recipe" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="recipe-title">
                  <a href={recipe.recipe.url}>{recipe.recipe.label}</a>
                </div>
                <div className="recipe-labels">
                  {recipe.recipe.healthLabels.map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="row bgr">
              <div className="col-md-4">
                <div className="serv">{recipe.recipe.yield} servings</div>
                <div className="daily-cal-area">
                  <div className="daily-cal">{recipe.recipe.calories}</div> kcal
                </div>
              </div>
              <div className="col-md-4">
                <ul className="nutr-left">
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
              <div className="col-md-4">
                <ul className="nutr-right">
                  {Object.entries(recipe.recipe.totalDaily).map(
                    ([key, nutrient]) => (
                      <li key={key}>
                        <span>{nutrient.label}</span>
                        <span>{nutrient.quantity.toFixed(2)}%</span>
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
