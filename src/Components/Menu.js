import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

import { useTranslation } from "react-i18next";

function Menu({ setClassActive }) {
  const [t, i18n] = useTranslation();
  return (
    <div className="menu">
      <nav>
        <NavLink to="/" onClick={() => setClassActive("")}>
          {t("Home")}
        </NavLink>

        <NavLink to="/Programs" onClick={() => setClassActive("")}>
          {t("Programs")}
        </NavLink>

        <NavLink to="/About" onClick={() => setClassActive("")}>
          {t("About")}
        </NavLink>

        <NavLink to="/Classes" onClick={() => setClassActive("")}>
          {t("Classes")}
        </NavLink>

        <NavLink to="/Pricing" onClick={() => setClassActive("")}>
          {t("pricing")}
        </NavLink>

        <NavLink to="/Blog" onClick={() => setClassActive("")}>
          {t("Blog")}
        </NavLink>

        <NavLink to="/Contact" onClick={() => setClassActive("")}>
          {t("Contact")}
        </NavLink>
      </nav>
    </div>
  );
}

export default Menu;
