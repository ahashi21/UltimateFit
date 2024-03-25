import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FacebookLogo from "../assets/images/icons8-facebook-48.png"; // Import the Facebook icon
import InstagramLogo from "../assets/images/icons8-instagram-48.png"; // Import the Instagram icon
import LinkedinLogo from "../assets/images/icons8-linkedin-48.png"; // Import the LinkedIn icon
import YoutubeLogo from "../assets/images/icons8-youtube-48.png"; // Import the YouTube icon
import TiktokLogo from "../assets/images/icons8-tiktok-48.png"; // Import the TikTok icon

const Footer = () => (
  <Box mt="80px" bgcolor="#12AF57">
    <Stack
      direction="row"  // Align icons horizontally
      spacing={2}       // Adjust spacing between icons
      justifyContent="center" // Center align icons horizontally
      alignItems="center"     // Center align icons vertically
      py={2}            // Add padding on Y-axis
    >
      {/* Display Facebook icon */}
      <img src={FacebookLogo} alt="Facebook" style={{ width: "24px", height: "24px" }} />
      
      {/* Display Instagram icon */}
      <img src={InstagramLogo} alt="Instagram" style={{ width: "24px", height: "24px" }} />

      {/* Display LinkedIn icon */}
      <img src={LinkedinLogo} alt="LinkedIn" style={{ width: "24px", height: "24px" }} />

      {/* Display YouTube icon */}
      <img src={YoutubeLogo} alt="YouTube" style={{ width: "24px", height: "24px" }} />

      {/* Display TikTok icon */}
      <img src={TiktokLogo} alt="TikTok" style={{ width: "24px", height: "24px" }} />
      
      {/* Add more img tags for additional social icons */}
    </Stack>

    {/* Typography component */}
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="16px" // Adjust the margin top
      textAlign="center"
      pb="40px"
    >
      ©2024 by UltimateFit. Created by Mathashjer.
    </Typography>
  </Box>
);

export default Footer;
