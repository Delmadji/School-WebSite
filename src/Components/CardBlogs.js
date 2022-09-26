import React from "react";
import "./CardBlogs.css";

function CardBlogs({ image, name, date, desc }) {
  return (
    <div className="cardBlogs">
      <div className="cardBlogs__image">
        <img src={image} alt="" />
      </div>
      <div className="cardBlogs__container">
        <div className="cardBlogs__info">
          <p className="name">{name}</p>
          <p className="date">{date}</p>
        </div>
        <div className="cardBlogs__desc">
          <h2>{desc}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardBlogs;
