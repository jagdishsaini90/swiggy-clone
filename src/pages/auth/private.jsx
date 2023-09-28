import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../footer";

const PrivateRoute = () => {
  const addressData = JSON.parse(localStorage.getItem("user_address"));
  return addressData ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/locate" />
  );
};

export default PrivateRoute;
