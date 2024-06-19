import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-items ">
          <div className="logo">
            <a href="/">
              <h1>COCKTAIL APP</h1>
            </a>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/loginsignup">loginsignup</NavLink>
            </li>
            <li>
              <NavLink to="/signup">signup</NavLink>
            </li>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
