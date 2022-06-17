import { Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/dashboard.png";
import Navbar from "../components/Navbar";
import Auth from "../utils/auth.js";

const Dashboard = () => {
  const loggedIn = (event) => {
    event.preventDefault();
    Auth.loggedin();
  };
  return (
    <div>
      <Navbar />
      <div className="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
        <h1 className="text-center text-5xl">
          {Auth.getProfile().data.username}
        </h1>
        <h2 className="text-center text-3xl">Bio</h2>
        <div className="w-7/12">
          <img className="" src={image} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
