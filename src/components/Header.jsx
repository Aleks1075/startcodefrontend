import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <ul className="header">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/quote">Quote</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </ul>
  );
};

export default Header;