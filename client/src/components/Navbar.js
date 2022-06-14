import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"></Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <h1>Homepage</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <h1>Dashboard</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/allPosts">
              <h1>All Posts</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              <h1>Sign up</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <h1>Login </h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// const AppNavbar = () => {
//   return (
//     <div class="container">
//       <div class="theme-switch">
//         <div class="switch"></div>
//       </div>
//       <div class="navigation">
//         <ul>
//           <a href="/" class="active" target="_blank">
//             Home
//           </a>
//           <a href="/dashboard" target="_blank">
//             Dashboard
//           </a>
//           <a href="/allpost" target="_blank">
//             All Posts
//           </a>
//         </ul>
//       </div>
//     </div>
//   );
// };

export default AppNavbar;
