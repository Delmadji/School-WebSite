import React, { useState } from "react";
import "./Header.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "./Menu";

import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation();
  const [classActive, setClassActive] = useState("");

  const setClass = () => {
    classActive === "Active" ? setClassActive(" ") : setClassActive("Active");
  };

  return (
    <div className="header">
      <div className="container">
        <div className="headerLeft">
          <div className="headerLeft__icon">
            <ReorderIcon onClick={() => setClass()} />
            <div className={`headerLeft__list ${classActive}`}>
              <CloseIcon onClick={() => setClass()} />
              <Menu setClassActive={setClassActive} />
            </div>
          </div>
          <h2 className="headerLeft__logo">{t("Siradj School")}</h2>
        </div>
        <div className="headerRight">
          <div className="headerRight__list">
            <Menu />
          </div>
          <div className="headerRight__button">
            <button className="signUp__button">{t("Sign Up")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
