import React from "react";
import { Typography, Stack, Button } from "@mui/material";

const RDetail = ({ recipe }) => {
  const { label, image, calories, dietLabels, healthLabels, ingredientLines } =
    recipe;

  const extraDetail = [
    {
      name: "Ingredients", // You can customize this label if needed
      data: ingredientLines.join(", "),
    },
    {
      name: "Calories",
      data: `${Math.round(calories)} kcal`,
    },
    {
      name: "Diet Labels",
      data: dietLabels.join(", "),
    },
    {
      name: "Health Labels",
      data: healthLabels.join(", "),
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={image} alt={label} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {label}
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Stack>
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "30px", xs: "20px" } }}
              >
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: { lg: "24px", xs: "18px" } }}>
                {item.data}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default RDetail;
