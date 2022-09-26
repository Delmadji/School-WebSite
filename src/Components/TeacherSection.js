import React from "react";
import CardTeacher from "./CardTeacher";
import "./TeacherSection.css";
import Image from "../assets/image/me.jpeg";
import teachOne from "../assets/image/testimonial1.jpg";
import teachTow from "../assets/image/testimonial2.jpg";
import teachThree from "../assets/image/testimonial3.jpg";

function TeacherSection() {
  return (
    <div className="teacherSection">
      <div className="container">
        <div className="teacherSection__top">
          <h2>
            Take The Course &amp; Start <br />
            Learning From Today
          </h2>
          <p>
            Consequat interdum massa molestie varius facilisi
            <br /> lectus libero, morbi pretium. Volutpat cursus sollicit
            <br /> udin blandit posuere facilisi volutpat
          </p>
        </div>
        <div className="teacherSection__card">
          <CardTeacher
            image={Image}
            name="Younes Delmadji"
            subject="English Teacher"
          />
          <CardTeacher
            image={teachOne}
            name="Sajiya Maamcha"
            subject="Mathematics Teacher"
          />
          <CardTeacher
            image={teachTow}
            name="Alkhitos "
            subject="French Teacher"
          />
          <CardTeacher
            image={teachThree}
            name="Gringo Sabonji"
            subject="Sciences Teacher"
          />
        </div>
      </div>
    </div>
  );
}

export default TeacherSection;
