import React from "react";
import "./Home.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import momSchoolImg from "../assets/image/Rectangle6.png";
import kidsImg from "../assets/image/Rectangle7.png";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="homeLeft">
          <h1>
            Early Childhood <br />
            Care &amp; Education
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            mollitia dolor quod qui illum explicabo sapiente voluptas pariatur
            hic accusantium accusamus facere suscipit nemo placeat quia dolore,
            soluta sed consequatur!
          </p>
          <button>
            Enroll Now <ArrowRightAltIcon />
          </button>
        </div>
        <div className="homeRight">
          <div className="imgOne">
            <img src={momSchoolImg} alt="momSchool" />
          </div>
          <div className="imgTow">
            <img src={kidsImg} alt="kidsSchool" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
