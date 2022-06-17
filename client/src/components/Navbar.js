import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth.js";

// Nav menu with all links to pages

const AppNavbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      <nav className=" w-full border-b bg-white bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
            <a
              href="/"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <div aria-hidden="true" className="flex space-x-1">
                <div className="h-4 w-4 rounded-full bg-gray-900"></div>
                <div className="h-6 w-2 bg-green-500"></div>
              </div>
              <span className="text-base font-bold text-gray-400">
                SPOTIFY SOCIAL
              </span>
            </a>
            <label
              for="hbr"
              className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
            >
              <div
                aria-hidden="true"
                className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
              ></div>
            </label>
          </div>
          <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0 float-center">
            <li>
              <Link
                className="block md:px-4 transition hover:text-sky-700"
                to="/"
              >
                {" "}
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                className="block md:px-4 transition hover:text-sky-700"
                to="/dashboard"
              >
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                className="block md:px-4 transition hover:text-sky-700"
                to="/allPosts"
              >
                <span>All Posts</span>{" "}
              </Link>
            </li>
            <li>
              <Link
                className="block md:px-4 transition hover:text-sky-700"
                to="/login"
              >
                <span>Login</span>{" "}
              </Link>
            </li>
            <li>
              <Link
                className="block md:px-4 transition hover:text-sky-700"
                to="/signup"
              >
                <span>Signup</span>{" "}
              </Link>
            </li>
          </ul>
          <h3 className="text-center  text-green-500 text-5xl">
            {Auth.getProfile().data.username}
          </h3>

          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
