import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const arrowStyle = {
  width: "40px", // Adjust the width to make the arrows smaller
  height: "40px", // Adjust the height to make the arrows smaller
};

const iconBoxStyle = {
  // width: "200px",
  // height: "200px",
  marginRight: "10px", // Add margin between icon boxes
};

const DetailHorizontalScrollbar = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart,
  visibleItems,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePrevClick = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1));
  };

  const handleNextClick = () => {
    setScrollPosition(Math.min(data.length - visibleItems, scrollPosition + 1));
  };

  const showLeftArrow = scrollPosition > 0;
  const showRightArrow = scrollPosition < data.length - visibleItems;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", overflowX: "auto", width: "100%" }}>
        {data
          .slice(scrollPosition, scrollPosition + visibleItems)
          .map((item, index) => (
            <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              m="0 10px" // Adjust margin for items
              style={{
                ...iconBoxStyle,
                marginRight: index < visibleItems - 1 ? "10px" : 0,
              }}
            >
              {bodyParts ? (
                <BodyPart
                  item={item}
                  setBodyPart={setBodyPart}
                  bodyPart={bodyPart}
                />
              ) : (
                <ExerciseCard exercise={item} />
              )}
            </Box>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            visibility: showLeftArrow ? "visible" : "hidden",
            cursor: "pointer",
          }}
          onClick={handlePrevClick}
        >
          <img src={LeftArrowIcon} alt="left-arrow" style={arrowStyle} />
        </div>
        <div
          style={{
            visibility: showRightArrow ? "visible" : "hidden",
            cursor: "pointer",
          }}
          onClick={handleNextClick}
        >
          <img src={RightArrowIcon} alt="right-arrow" style={arrowStyle} />
        </div>
      </div>
    </div>
  );
};

export default DetailHorizontalScrollbar;
