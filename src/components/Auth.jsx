import React, { useState } from "react";
import axios from "axios";
import "../Styles/Auth.css"; // Import your CSS file for styling

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        // Register
        const res = await axios.post("/register", formData); // Sending registration data to backend
        console.log(res.data);
        // Handle successful registration (redirect, show success message, etc.)
      } else {
        // Login
        const res = await axios.post("/login", formData); // Sending login data to backend
        console.log(res.data);
        // Handle successful login (redirect, store user data in state/context, etc.)
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      // Handle error (show error message, reset form, etc.)
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegistering ? "Register" : "Sign In"}</h2>
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
