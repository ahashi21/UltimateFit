// frontend/Auth.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Auth.css";

const Auth = ({ handleLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const res = await axios.post("/register", formData);
        console.log("Registration Response:", res.data);
        alert(res.data.message); // Alert registration message
        // Redirect to login page after successful registration
        navigate("/login");
      } else {
        const res = await axios.post("/login", formData);
        console.log("Login Response:", res.data);
        // Call handleLogin upon successful login
        handleLogin();
        // Redirect to home page after successful login
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      setErrorMessage(error.response.data.error); // Set error message
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegistering ? "Register" : "Sign In"}</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isRegistering ? "Register" : "Sign In"}</button>
      </form>
      <p>
        {isRegistering
          ? "Already have an account? "
          : "Don't have an account? "}
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Sign In" : "Register here"}
        </button>
      </p>
    </div>
  );
};

export default Auth;
