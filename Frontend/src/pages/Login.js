import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import { ROUTES } from "../utils/constant";
import { loginRequest } from "../authentication/sso/msalConfig";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  // const [ formData, setFormData ] = useState( {} );
  // const [ email, setEmail ] = useState( "" );
  // const [ password, setPassword ] = useState( "" );
  // const [ showPassword, setShowPassword ] = useState( false );

  // const handleFormInput = ( key, data ) => {
  //     formData[ key ] = data;
  // }
  //sm:w-[25rem] sm:min-w-[10rem]

  const handleLoginWithMicrosoft = (loginType) => {
    if (loginType === "popup") {
      instance
        .loginPopup(loginRequest)
        .then((response) => {
          console.log(response, "www343333333");
          localStorage.setItem("authToken", response?.accessToken);
          console.log(isAuthenticated, "www343333333");
          navigate("/");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full px-4 py-20 pt-36 h-160 bg-gray-light">
        <form className="px-12 pt-10 pb-8 m-auto bg-white rounded shadow-md sm:w-[30rem] sm:min-w-[10rem]">
          <div className="text-sm font-bold text-center text-gray-700">
            Welcome back! 👋
          </div>
          <div className="mt-2 mb-8 text-xl text-center text-gray-700">
            Sign in to your accounnt
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="w-full px-4 py-2 font-bold text-white rounded bg-blue hover:bg-blueHover focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>

          <div className="mt-6 text-sm font-semibold text-center text-gray-700">
            <Link>
              <p className="inline-block font-extraboldold text-blue ">
                Forgot your Password ?
              </p>
            </Link>
          </div>
          <div className="text-center text-xs mt-4"> OR</div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="w-full flex gap-6 justify-center items-center px-4 py-2 font-bold text-blue rounded border-blue border-2 hover:bg-gray focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleLoginWithMicrosoft("popup")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                className=" h-6 "
              />
              <p>Login with Microsoft</p>{" "}
            </button>
          </div>

          <div className="mt-6 text-sm font-semibold text-center text-gray-700">
            <span>Don't Have an account? </span>
            <Link to={ROUTES.SIGNUP}>
              <p className="inline-block font-extraboldold text-blue ">
                Sign Up!
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
