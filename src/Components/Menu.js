import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu({ setClassActive }) {
  return (
    <div className="menu">
      <nav>
        <NavLink to="/" onClick={() => setClassActive("")}>
          Home
        </NavLink>

        <NavLink to="/Programs" onClick={() => setClassActive("")}>
          Programs
        </NavLink>

        <NavLink to="/About" onClick={() => setClassActive("")}>
          About
        </NavLink>

        <NavLink to="/Classes" onClick={() => setClassActive("")}>
          Classes
        </NavLink>

        <NavLink to="/Pricing" onClick={() => setClassActive("")}>
          pricing
        </NavLink>

        <NavLink to="/Blog" onClick={() => setClassActive("")}>
          Blog
        </NavLink>

        <NavLink to="/Contact" onClick={() => setClassActive("")}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Menu;
