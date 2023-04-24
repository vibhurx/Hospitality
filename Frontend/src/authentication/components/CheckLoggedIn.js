import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import { ROUTES } from "../../utils/constant";

const CheckLoggedIn = () => {
  let authToken = localStorage.getItem("authToken");
  const location = useLocation();
  return authToken ? (
    <div style={{ minHeight: "85vh", overflowX: "hidden" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Navigate
      to={ROUTES.LOGIN}
      replace={true}
      state={{ path: location.pathname }}
    />
  );
};

export default CheckLoggedIn;
