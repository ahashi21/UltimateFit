import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const RecipeCard = ({ recipe }) => (
  <Link className="recipe-card" to={`/recipe/${recipe.uri}`}>
    <img src={recipe.image} alt={recipe.label} loading="lazy" />
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {recipe.label}
    </Typography>
    <Stack direction="row">
      {recipe.healthLabels.map((label, index) => (
        <Button
          key={index}
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {label}
        </Button>
      ))}
    </Stack>
    <Stack direction="row">
      {recipe.dietLabels.map((label, index) => (
        <Button
          key={index}
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {label}
        </Button>
      ))}
    </Stack>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Source: {recipe.source}
    </Typography>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Share: {recipe.shareAs}
    </Typography>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Yield: {recipe.yield}
    </Typography>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Total Time: {recipe.totalTime} minutes
    </Typography>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Cuisine: {recipe.cuisineType.join(", ")}
    </Typography>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Meal Type: {recipe.mealType.join(", ")}
    </Typography>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Dish Type: {recipe.dishType.join(", ")}
    </Typography>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Ingredients:
    </Typography>
    <ul>
      {recipe.ingredientLines.map((ingredient, index) => (
        <li key={index} style={{ marginLeft: "21px" }}>
          {ingredient}
        </li>
      ))}
    </ul>
    <Typography ml="21px" color="#000" mt="11px" pb="10px">
      Nutrition Facts:
    </Typography>
    <ul>
      {Object.entries(recipe.totalNutrients).map(([key, nutrient]) => (
        <li key={key} style={{ marginLeft: "21px" }}>
          {nutrient.label}: {nutrient.quantity} {nutrient.unit}
        </li>
      ))}
    </ul>
  </Link>
);

export default RecipeCard;
