import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;

// $(() => {
//   window.header = {};

//   const $pageHeader = $('#page-header');
//   let currentUser = null;
//   function updateHeader(user) {
//     currentUser = user;
//     $pageHeader.find("#page-header__user-links").remove();
//     let userLinks;

//     if (!user) {
//       userLinks = `
//       <nav id="page-header__user-links" class="page-header__user-links">
//         <ul>
//           <li class="home">🏠</li>
//           <li class="search_button">Search</li>
//           <li class="login_button">Log In</li>
//           <li class="sign-up_button">Sign Up</li>
//         </ul>
//       </nav>
//       `
//     } else {
//       userLinks = `
//       <nav id="page-header__user-links" class="page-header__user-links">
//         <ul>
//           <li class="home">🏠</li>
//           <li class="search_button">Search</li>
//           <li>${user.name}</li>

//           <li class="my_listing_button">My Listings</li>

//           <li class="logout_button">Log Out</li>
//         </ul>
//       </nav>
//       `
//     }

//     $pageHeader.append(userLinks);
//   }

//   window.header.update = updateHeader;

//   getMyDetails()
//     .then(function( json ) {
//     updateHeader(json.user);
//   });

//   // change for my page
//   $("header").on("click", '.my_listing_button', function() {
//     propertyListings.clearListings();
//     getAllListings(`owner_id=${currentUser.id}`)
//       .then(function(json) {
//         propertyListings.addProperties(json.properties);
//         views_manager.show('listings');
//     });
//   });

//   //change to return to home page
//   $("header").on("click", '.home', function() {
//     propertyListings.clearListings();
//     getAllListings()
//       .then(function(json) {
//         propertyListings.addProperties(json.properties);
//         views_manager.show('listings');
//     });
//   });

//   $("header").on('click', '.login_button', () => {
//     views_manager.show('logIn');
//   });
//   $("header").on('click', '.sign-up_button', () => {
//     views_manager.show('signUp');
//   });
//   $("header").on('click', '.logout_button', () => {
//     logOut().then(() => {
//       header.update(null);
//     });
//   });

// });
