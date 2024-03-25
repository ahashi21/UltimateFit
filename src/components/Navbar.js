import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material"; // Import Button from Material-UI
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
        <Link to="/login">
          <Button variant="contained" style={{ backgroundColor: "#12AF57", color: "#ffffff" }}>Login</Button>
        </Link>
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
    fontWeight: "bold", // Adjust font weight here
    fontFamily: "Arial, sans-serif", // Adjust font family here
  }}
    activeStyle={{ backgroundColor: "#ddd" }}
    className="nav-link" // Added class for styling

    onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
    // Resetting text color on mouse leave
    
    onMouseLeave={(e) => e.currentTarget.style.color = "#000000"}
  >
    {children}
  </Link>
);

export default Navbar;
