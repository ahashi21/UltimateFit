import React, { useState } from "react";
import { Typography, Box, Stack } from "@mui/material";

import DetailHorizontalScrollbar from "./DetailHorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises }) => {
  const [visibleItems, setVisibleItems] = useState(5); // Number of visible items at a time
  console.log("targetMuscleExercises", targetMuscleExercises); // Log the value here

  // const scrollPrev = () => {
  //   setVisibleItems((prevVisibleItems) => Math.max(prevVisibleItems - 1, 5)); // Ensure a minimum of 5 visible items
  // };

  // const scrollNext = () => {
  //   setVisibleItems((prevVisibleItems) =>
  //     Math.min(prevVisibleItems + 1, bodyParts.length)
  //   ); // Ensure maximum is the length of bodyParts array
  // };

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <DetailHorizontalScrollbar
            data={targetMuscleExercises}
            visibleItems={visibleItems}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
