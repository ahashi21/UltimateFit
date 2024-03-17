import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import RecipeHorizontalScrollbar from "./RecipeHorizontalScrollbar";
import Loader from "./Loader";

const SimilarRecipes = ({ ingredients, diets }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar Recipes by{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Ingredients
      </span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {ingredients.length !== 0 ? (
        <RecipeHorizontalScrollbar data={ingredients} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar Recipes by{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Diets
      </span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {diets.length !== 0 ? (
        <RecipeHorizontalScrollbar data={diets} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarRecipes;