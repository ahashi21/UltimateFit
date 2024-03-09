import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Stack>
      <Link>
        <image src={Logo} />
      </Link>
    </Stack>
  );
};

export default Navbar;
