import React from "react";
import "./cardStudents.css";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";

function CardStudents({ image, name }) {
  const repeateStars = (n) => {
    var stars = [];
    for (let i = 0; i < n; i++) {
      stars[i] = <StarIcon key={i} />;
    }
    return stars;
  };
  return (
    <div className="cardStudents">
      <div className="cardStudents__top">
        <p>
          Donec metus lorem, vulpu a ate at sa pien sit amet, auct or iaculis
          lorem. In vel he is erit nisi. Vestibulum ege t risus velit.Vestibulum
          ege t risus velit.
        </p>
      </div>
      <div className="cardStudents__bottom">
        <div className="cardStudents__bottom__left">
          <div className="avatar">
            <Avatar alt="Remy Sharp" src={image} />
          </div>
          <div className="info">
            <h3>{name}</h3>
            <p>student</p>
          </div>
        </div>
        <div className="cardStudents__bottom__right">{repeateStars(4)}</div>
      </div>
    </div>
  );
}

export default CardStudents;
