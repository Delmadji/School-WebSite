import React from "react";
import "./CardClasses.css";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EnglichClass from "../assets/image/EnglichClass.png";
import Image from "../assets/image/me.jpeg";

function CardClasses() {
  const repeateStars = (n) => {
    var stars = [];
    for (let i = 0; i < n; i++) {
      stars[i] = <StarIcon key={i} />;
    }
    return stars;
  };
  return (
    <div className="cardClasses">
      <div className="cardClasses__image">
        <img src={EnglichClass} alt="hhh" />
      </div>
      <div className="cardClasses__price">
        <p>$69</p>
      </div>
      <div className="containerCard">
        <div className="cardClasses__top">
          <div className="cardClasses__classes">
            <p>Class6</p>
          </div>
          <div className="cardClasses__stars">
            {repeateStars(4)}
            <p>4.0 (727)</p>
          </div>
        </div>
        <div className="cardClasses__desc">
          <h3>Language Class for kids</h3>
          <p>
            Phasellus elementum suspendisse quis et rutrum. Totor aliquet tempus
          </p>
        </div>
        <div className="cardClasses__information">
          <div className="times">
            <AccessTimeIcon />
            <p>10 AM - 12 AM</p>
          </div>
          <div className="numbers">
            <PeopleAltIcon />
            <p>354</p>
          </div>
        </div>
        <div className="teacherInfo">
          <Avatar alt="Remy Sharp" src={Image} />
          <h3>Kathryn Murphy</h3>
        </div>
      </div>
    </div>
  );
}

export default CardClasses;
