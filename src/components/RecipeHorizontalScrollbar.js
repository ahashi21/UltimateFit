import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography, makeStyles } from "@mui/material"; // Import makeStyles for styling

import RecipeCard from "./RecipeCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const useStyles = makeStyles((theme) => ({
  scrollbarContainer: {
    overflowX: "auto", // Enable horizontal scrolling
    display: "flex", // Ensure contents are displayed in a row
    alignItems: "center", // Center the contents vertically
    height: "100%", // Set the height to fill the container
  },
}));

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={scrollPrev} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={scrollNext} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RecipeHorizontalScrollbar = ({ recipes }) => {
  const classes = useStyles();

  return (
    <div className={classes.scrollbarContainer}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {recipes.map((recipe) => (
          <Box key={recipe.id || recipe} itemId={recipe.id || recipe} title={recipe.id || recipe} m="0 40px">
            <RecipeCard recipe={recipe} />
          </Box>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default RecipeHorizontalScrollbar;
