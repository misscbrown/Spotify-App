import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import auth from "../utils/auth";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.loggedIn()) {
      navigate("/dashboard");
    }
  }, []);

  return <div>Homepage</div>;
}

export default Homepage;
