import React from "react";
import CardStudents from "./CardStudents";
import "./TestimonialSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "../assets/image/me.jpeg";
import teachOne from "../assets/image/testimonial1.jpg";
import teachTow from "../assets/image/testimonial2.jpg";
import teachThree from "../assets/image/testimonial3.jpg";

function TestimonialSection() {
  return (
    <div className="testimonialSection">
      <div className="container">
        <div className="title">
          <h1>What our students say</h1>
        </div>
        <div className="cards">
          <CardStudents image={Image} name="Younes Delmadji" />
          <CardStudents image={teachOne} name="Younes Delmadji" />
          <CardStudents image={teachTow} name="Younes Delmadji" />
          <CardStudents image={teachThree} name="Younes Delmadji" />
        </div>
        <div className="buttons">
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

export default TestimonialSection;
