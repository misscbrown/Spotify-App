import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth.js";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

// import logo from "../../src/assets/images/lo"

// const AppNavbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/"></Link>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">
//               <h1>Homepage</h1>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/dashboard">
//               <h1>Dashboard</h1>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/allPosts">
//               <h1>All Posts</h1>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/signup">
//               <h1>Sign up</h1>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/login">
//               <h1>Login </h1>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

const AppNavbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div class="relative w-full">
      <header>
        <nav class="fixed z-10 w-full border-b bg-white bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-transparent">
          <div class="container m-auto px-2 md:px-12 lg:px-7">
            <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <a href="/" aria-label="logo" class="flex space-x-2 items-center">
                <div aria-hidden="true" class="flex space-x-1">
                  <div class="h-4 w-4 rounded-full bg-gray-900"></div>
                  <div class="h-6 w-2 bg-green-500"></div>
                </div>
                <span class="text-base font-bold text-gray-400">
                  SPOTIFY SOCIAL
                </span>
              </a>
              <label
                for="hbr"
                class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>
            </div>
            <div class="navmenu hidden w-full flex-wrap justify-end items-center  mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-12/12 lg:shadow-none">
              <div class="text-gray-600 lg:pr-4">
                <ul class="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0 float-center">
                  <li>
                    <Link
                      class="block md:px-4 transition hover:text-sky-700"
                      to="/"
                    >
                      {" "}
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="block md:px-4 transition hover:text-sky-700"
                      to="/dashboard"
                    >
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="block md:px-4 transition hover:text-sky-700"
                      to="/allPosts"
                    >
                      <span>All Posts</span>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="block md:px-4 transition hover:text-sky-700"
                      to="/login"
                    >
                      <span>Login</span>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="block md:px-4 transition hover:text-sky-700"
                      to="/signup"
                    >
                      <span>Signup</span>{" "}
                    </Link>
                  </li>
                </ul>

                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default AppNavbar;
