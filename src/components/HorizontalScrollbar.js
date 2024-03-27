import React, { useState } from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import "../Styles/HorizontalScrollbar.css";

const arrowStyle = {
  width: "40px",
  height: "40px",
};

const iconBoxStyle = {
  width: "200px",
  height: "200px",
  marginRight: "10px", // Add margin between icon boxes
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, visibleItems }) => {
  const isItemSelected = (item) => item === bodyPart;
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
              style={{
                ...iconBoxStyle,
                marginRight: index < visibleItems - 1 ? "10px" : 0,
              }}
            >
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                isSelected={isItemSelected(item)}
              />
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
          style={{ visibility: showLeftArrow ? "visible" : "hidden" }}
          onClick={handlePrevClick}
          style={{ cursor: "pointer" }}
        >
          <img src={LeftArrowIcon} alt="left-arrow" style={arrowStyle} />
        </div>
        <div
          style={{ visibility: showRightArrow ? "visible" : "hidden" }}
          onClick={handleNextClick}
          style={{ cursor: "pointer" }}
        >
          <img src={RightArrowIcon} alt="right-arrow" style={arrowStyle} />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
