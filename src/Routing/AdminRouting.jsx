import { Navigate } from "react-router-dom";
import React from "react";

const AdminRouting = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("USER_DATA"));

  const allowedUsers = [
    { email: "ijmsbc@gmail.com" },
    // { password: "Admin@123" },
  ];

  const isAuthorized =
    userData && allowedUsers.some((user) => user.email === userData.email);

  if (!isAuthorized) {
    console.log("Invalid credentials");
    return <Navigate to="/" replace />;
  }

  return (
    <>
     
      {children}
    </>
  );
};

export default AdminRouting;
