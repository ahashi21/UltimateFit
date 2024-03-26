import React from "react";
import Auth from "../components/Auth"; // Import the Auth component

const RegisterSignIn = ({ isAuthenticated, handleLogin }) => {
  return (
    <div>
      <h1>UltimateFit</h1>
      {!isAuthenticated ? (
        <div>
          <p>Please register or sign in to access your page</p>
          <Auth handleLogin={handleLogin} />
        </div>
      ) : (
        <p>You are already logged in!</p>
      )}
    </div>
  );
};

export default RegisterSignIn;
