import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import { fetchData, recipeOptions } from "../utils/fetchData";

const SearchRecipes = ({ setRecipes }) => {
  const [search, setSearch] = useState("");
  const [diets, setDiets] = useState([]);

  // useEffect(() => {
  //   const fetchRecipesData = async () => {
  //     const url =
  //       "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&ingr=1-100000";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "Accept-Language": "en",
  //         "X-RapidAPI-Key":
  //           "177ed6bc56mshdb0536d4d73cf38p1a682fjsn9405fee34da6",
  //         "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setDiets(result.hits);
  //       console.log("diets", diets);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     //   const dietsData = await fetchData(
  //     //     "https://api.edamam.com/api/recipes/v2?type=public",
  //     //     recipeOptions
  //     //   );
  //     //   setDiets(["all", ...dietsData]);
  //     // };
  //   };
  //   fetchRecipesData();
  // }, []);

  const handleSearch = async () => {
    if (search) {
      const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&q=${search}`;
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
      } catch (error) {
        console.error(error);
      }
      // const recipesData = await fetchData(
      //   `https://api.edamam.com/api/recipes/v2?type=public&q=${search}`,
      //   recipeOptions
      // );

      // const searchedRecipes = recipesData.hits.map((hit) => hit.recipe);
      // setRecipes(searchedRecipes);
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
    </Stack>
  );
};

export default SearchRecipes;
