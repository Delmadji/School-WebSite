import React from "react";
import "./About.css";
import imageOne from "../assets/image/Rectangle 9570.png";
import imageTow from "../assets/image/Rectangle 9574.png";
import imageThree from "../assets/image/Rectangle 9573.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ShapeSemiCircle from "./ShapeSemiCircle";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="aboutLeft">
          <img className="imageOne" src={imageOne} alt="imageOne" />
          <img className="imageTow" src={imageTow} alt="imageTow" />
          <img className="imageThree" src={imageThree} alt="imageThree" />
        </div>
        <div className="aboutRight">
          <div className="aboutRight__top">
            <h3>
              We Special Care For <br /> Your Children
            </h3>
            <p>
              Varius est lacus, consequat, sit arcu. Convallis quis posuere
              euismod tempus eros, malesuada gravida. Blandit aliquet justo
              risus, mi et. a Et at tincidunt diam, mauris amet scelerisque
              volutpat nisl. Sem is per felis et, orci duis. Elementum.
            </p>
            <button>
              Enroll Now <ArrowRightAltIcon />
            </button>
          </div>
          <div className="aboutRight__bottom">
            <ShapeSemiCircle title="557+" desc="Students Enrolled" />
            <ShapeSemiCircle title="27+" desc="Total Teacher" />
            <ShapeSemiCircle title="557+" desc="Students Enrolled" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
