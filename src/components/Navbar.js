import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import "../App.css"; // Import CSS file for Navbar styling

const Navbar = ({ isAuthenticated, handleLogout, user }) => (
  <div className="navbar-container">
    {/* Wrap Stack in a div for positioning */}
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={1}
      bgcolor="#f0f0f0"
      boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
      className="navbar" // Add a class for styling
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
        {isAuthenticated ? (
          <>
            <NavLink to="/mypage"> {user.name.toUpperCase()}`s Page</NavLink>
            <Button
              variant="contained"
              style={{ backgroundColor: "#ff0000", color: "#ffffff" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button
              variant="contained"
              style={{ backgroundColor: "#12AF57", color: "#ffffff" }}
            >
              Login
            </Button>
          </Link>
        )}
      </Stack>
    </Stack>
  </div>
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
      fontWeight: "bold",
      fontFamily: "Arial, sans-serif",
    }}
    activeStyle={{ backgroundColor: "#ddd" }}
    className="nav-link"
    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
  >
    {children}
  </Link>
);

export default Navbar;
