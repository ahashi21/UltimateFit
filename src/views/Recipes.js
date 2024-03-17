import React, { useState } from "react";
import { Box } from "@mui/material";

import Recipe from "../components/Recipe";
import SearchRecipes from "../components/SearchRecipes";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("all");

  return (
    <Box>
      <SearchRecipes
        setRecipes={setRecipes}
        category={category}
        setCategory={setCategory}
      />
      <Recipe setRecipes={setRecipes} recipes={recipes} category={category} />
    </Box>
  );
};

export default Recipes;
