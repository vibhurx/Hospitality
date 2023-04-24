import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import { ROUTES } from "../../utils/constant";

const PublicRoutes = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== ROUTES.HOME && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoutes;
