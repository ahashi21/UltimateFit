import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = ({ isLoggedIn, userName }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    px={2}
    py={1}
    bgcolor="#f0f0f0"
    boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "80px", height: "80px", marginRight: "20px" }}
      />
    </Link>
    <Stack direction="row" gap={2}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/exercises">Exercises</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      {isLoggedIn ? (
        <NavLink to="/mypage">My Page ({userName})</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </Stack>
  </Stack>
);

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      color: "#333",
      padding: "8px 12px",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    }}
    activeStyle={{ backgroundColor: "#ddd" }}
  >
    {children}
  </Link>
);

export default Navbar;
