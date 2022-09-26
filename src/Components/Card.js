import React from "react";
import "./Card.css";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

function Card() {
  return (
    <div className="card">
      <Avatar sx={{ bgcolor: green[500] }}>
        <AssignmentIcon />
      </Avatar>
      <h3 className="cardTitle">Best Teachers</h3>
      <p className="cardParagraphe">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam hic
        possimus porro est dignissimos impedit error eaque accusantium, ad quasi
        nemo,
      </p>
    </div>
  );
}

export default Card;
