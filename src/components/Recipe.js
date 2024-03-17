import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { recipeOptions, fetchData } from "../utils/fetchData"; // Import recipeOptions
import RecipeCard from "./RecipeCard"; // Import RecipeCard component
import Loader from "./Loader";

const Recipe = ({ recipes, setRecipes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);

  useEffect(() => {
    const fetchRecipesData = async () => {
      let recipesData = [];

      // Fetch recipes data using the recipeOptions
      recipesData = await fetchData(
        "https://edamam-recipe-search.p.rapidapi.com/search",
        recipeOptions
      );

      setRecipes(recipesData);
    };

    fetchRecipesData();
  }, []);

  // Pagination
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentRecipes.length) return <Loader />;

  return (
    <Box id="recipes" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentRecipes.map((recipe, idx) => (
          <RecipeCard key={idx} recipe={recipe} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {recipes.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(recipes.length / recipesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Recipe;
