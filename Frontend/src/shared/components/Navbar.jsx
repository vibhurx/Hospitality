import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ICONS } from "../../assets";

const Navbar = () => {
  const [header, setHeader] = useState(true);

  let authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleSetToken = () => {
    const roomId = localStorage.getItem("room-id");
    localStorage.setItem("authToken", "sfsefse");
    roomId ? navigate(`/booking?room-id=${roomId}`) : navigate(`/`);
  };

  return (
    <header className="header">
      <div
        className={`md:px-12 lg:px-24 ${
          header ? "bg-white shadow-lg py-3" : "bg-transparent py-8 "
        } fixed z-50 w-full transition-all duration-500`}
      >
        <div className="container flex flex-col items-center mx-auto gap-y-2 md:flex-row md:justify-between md:gap-y-0">
          <a href="/">
            <h4
              className={`flex gap-2 items-center font-bold text-3xl ${
                header ? "text-primary" : "text-white"
              }`}
            >
              <div className="h-[2]rem w-[3rem] ">
                <svg
                  fill={header ? "#1a61a7" : "white"}
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 48 48"
                >
                  <path d="M39 40h-3V7a1 1 0 0 0-1-1H13a1 1 0 0 0-1 1v33H9a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2Zm-18 0v-6h6v6Zm8 0v-6h1a1 1 0 0 0 0-2H18a1 1 0 0 0 0 2h1v6h-5V8h20v32Z" />
                  <path d="M19 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-12 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-12 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-12 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
                </svg>
              </div>
              <div className={header ? "text-blue" : "text-white"}>
                Heritage
              </div>
            </h4>
          </a>

          {/* header menu */}
          <div className={`${header ? "text-blue" : "text-white"}`}>
            <ul className="hidden min-[450px]:flex items-center gap-x-6 font-tertiary text-[15px] tracking-[1.5px] lg:gap-x-8 ">
              <div className="transition hover:text-accent whitespace-nowrap">
                <Link to="/">Home</Link>
              </div>
              {authToken && (
                <div className="transition hover:text-accent whitespace-nowrap">
                  <Link to="">Rooms</Link>
                </div>
              )}
              <div className="transition hover:text-accent whitespace-nowrap">
                <Link to="/gallery">Gallery</Link>
              </div>
              <div className="transition hover:text-accent whitespace-nowrap">
                <Link to="/aboutus">About Us</Link>
              </div>
              {!authToken && (
                <div className="transition hover:text-accent whitespace-nowrap">
                  <button onClick={handleSetToken}>Set Token</button>
                </div>
              )}
              {!authToken ? (
                <div className="transition hover:text-accent whitespace-nowrap">
                  <Link to="/login">Login/SignUp</Link>
                </div>
              ) : (
                <div className="transition hover:text-accent whitespace-nowrap">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
