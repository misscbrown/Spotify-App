import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

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
  return (
    <nav>
      <div class="container">
        <div class="theme-switch">
          <div class="switch"></div>
        </div>
        <div class="navigation">
          <ul>
            <link to="/" class="active" target="_blank">
              Home
            </link>
            <link to="/dashboard">Dashboard</link>
            <link to="/allpost" target="_blank">
              All Posts
            </link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
