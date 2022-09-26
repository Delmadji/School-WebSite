import React from "react";
import "./ShapeSemiCircle.css";

function ShapeSemiCircle({ title, desc }) {
  return (
    <div className="shape">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default ShapeSemiCircle;
