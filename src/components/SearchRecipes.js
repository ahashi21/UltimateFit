import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, recipeOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchRecipes = ({ setRecipes }) => {
  const [search, setSearch] = useState("");
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const fetchRecipesData = async () => {
      const dietsData = await fetchData(
        "https://api.edamam.com/api/recipes/v2?type=public",
        recipeOptions
      );
      setDiets(["all", ...dietsData]);
    };

    fetchRecipesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const recipesData = await fetchData(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}`,
        recipeOptions
      );

      const searchedRecipes = recipesData.hits.map((hit) => hit.recipe);
      setRecipes(searchedRecipes);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Search Recipes
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Recipes"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={diets} />
      </Box>
    </Stack>
  );
};

export default SearchRecipes;
