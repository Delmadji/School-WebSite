import React from "react";
import "./Classes.css";
import CardClasses from "./CardClasses";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Classes() {
  return (
    <div className="classes">
      <div className="container">
        <div className="classes__title">
          <h1>
            Take The Classes &amp; Start <br /> Learning From Today
          </h1>
        </div>
        <div className="classes__cards">
          <CardClasses />
          <CardClasses />
          <CardClasses />
          <CardClasses />
        </div>
        <div className="classes__buttons">
          <button className="back">
            <ArrowBackIcon />
          </button>
          <button className="next active">
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Classes;
