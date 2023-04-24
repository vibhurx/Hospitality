import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constant";

/*----------  Components  ----------*/

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Blogs from "../pages/Blogs";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import Rooms from "../pages/Rooms";
import SingleRoom from "../pages/SingleRoom";
import RoomBooking from "../pages/RoomBooking";
import Search from "../pages/Search";
import CheckLoggedIn from "../authentication/components/CheckLoggedIn";
import CheckNotLoggedIn from "../authentication/components/CheckNotLoggedIn";
import PublicRoutes from "../authentication/components/PublicRoutes";

/*----------------------------------*/

export const CustomRoutes = () => {
  const publicRoutes = [
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.GALLERY,
      element: <Gallery />,
    },
    {
      path: ROUTES.BLOGS,
      element: <Blogs />,
    },
    {
      path: ROUTES.ABOUTUS,
      element: <AboutUs />,
    },
    {
      path: ROUTES.ROOMS,
      element: <Rooms />,
    },
    {
      path: ROUTES.SEARCH,
      element: <Search />,
    },
    {
      path: ROUTES.SINGLEROOM,
      element: <SingleRoom />,
    },
  ];

  const loggedInRoutes = [
    {
      path: ROUTES.ROOMBOOKING,
      element: <RoomBooking />,
    },
  ];

  const notLoggedInRoutes = [
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: ROUTES.SIGNUP,
      element: <SignUp />,
    },
  ];

  return (
    <main>
      <Routes>
        {publicRoutes.map((route, index) => {
          return (
            <Route key={index} element={<PublicRoutes />}>
              <Route key={index} path={route.path} element={route.element} />
            </Route>
          );
        })}
        <Route element={<CheckLoggedIn />}>
          {loggedInRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
        <Route element={<CheckNotLoggedIn />}>
          {notLoggedInRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
