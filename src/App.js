import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Home from "./views/Home";
import ExerciseDetail from "./views/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseList from "./views/ExerciseList";
import MyPage from "./views/MyPage";
import Recipes from "./views/Recipes";
import RegisterSignIn from "./views/RegisterSignIn";

const app = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/exercises" element={<ExerciseList />} />
        <Route path="/login" element={<RegisterSignIn />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default app;
