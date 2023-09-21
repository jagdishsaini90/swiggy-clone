import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const addressData = JSON.parse(localStorage.getItem("user_address"));
  return addressData ? <Outlet /> : <Navigate to="/locate" />;
};

export default PrivateRoute;
