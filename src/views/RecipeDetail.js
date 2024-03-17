import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, recipeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import SimilarRecipes from "../components/SimilarRecipes";

const RecipeDetail = () => {
  const [recipeDetail, setRecipeDetail] = useState({});
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchRecipeData = async () => {
      const recipeDbUrl = "https://recipedb.p.rapidapi.com";

      const recipeDetailData = await fetchData(
        `${recipeDbUrl}/recipes/${id}`,
        recipeOptions
      );
      setRecipeDetail(recipeDetailData);

      const similarRecipesData = await fetchData(
        `${recipeDbUrl}/recipes?category=${recipeDetailData.category}`,
        recipeOptions
      );
      setSimilarRecipes(similarRecipesData);
    };

    fetchRecipeData();
  }, [id]);

  if (!recipeDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail recipeDetail={recipeDetail} />
      <SimilarRecipes similarRecipes={similarRecipes} />
    </Box>
  );
};

export default RecipeDetail;
