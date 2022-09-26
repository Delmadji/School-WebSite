import React from "react";
import "./CardTeacher.css";
import Avatar from "@mui/material/Avatar";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function CardTeacher({ image, name, subject }) {
  return (
    <div className="cardTeacher">
      <div className="cardTeacher__avatar">
        <Avatar alt="Remy Sharp" src={image} sx={{ width: 272, height: 272 }} />
      </div>
      <div className="cardTeacher__info">
        <h3>{name}</h3>
        <p>{subject}</p>
      </div>
      <div className="cardTeacher__link">
        <a href="https://www.youtube.com/">
          <YouTubeIcon sx={{ color: "red", backgroundColor: "#f8e5e5" }} />
        </a>
        <a href="https://www.facebook.com/">
          <FacebookIcon sx={{ color: "#4267B2", backgroundColor: "#d9e2ee" }} />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <LinkedInIcon sx={{ color: "#0072b1", backgroundColor: "#dde1e6" }} />
        </a>
        <a href="https://twitter.com/home?lang=en">
          <TwitterIcon sx={{ color: "#1DA1F2", backgroundColor: "#e1ecf1" }} />
        </a>
      </div>
    </div>
  );
}

export default CardTeacher;
