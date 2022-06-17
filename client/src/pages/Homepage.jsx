import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import auth from "../utils/auth";
import homeimage from "../../src/assets/images/homepageimage.png";

function Homepage() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (auth.loggedIn()) {
  //     navigate("/dashboard");
  //   }
  // }, []);

  return (
    <div>
      <div class="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
        <div class="md:flex md:gap-12 pt-40 lg:py-56">
          <div class="md:w-6/12">
            <h1 class="text-gray-900 font-bold text-4xl xl:text-5xl">
              Build in your way but with our experts{" "}
              <span class="text-green-500">Support.</span>
            </h1>
            <p class="mt-8 text-gray-700">
              Share and discover songs from your favourite established and
              independent artists and join the conversation
            </p>
            <Link className="btn btn-lg btn-success m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </div>
          <div class="mt-12 h-56 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-7/12">
            <div class="md:5/12 lg:w-6/12 mx-w-l">
              <img
                className="homepgpic"
                src={homeimage}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
