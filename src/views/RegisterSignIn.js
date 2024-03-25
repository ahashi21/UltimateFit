import React from "react";
import Auth from "../components/Auth"; // Import the Auth component

const RegisterSignIn = (userName, OwnerId) => {
  return (
    <div>
      <h1>UltimateFit</h1>
      <p>Please register or sign in to access your page</p>
      <Auth /> {/* Include the Auth component here */}
    </div>
  );
};

export default RegisterSignIn;
