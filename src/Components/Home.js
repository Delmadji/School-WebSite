import React from "react";
import "./Home.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import momSchoolImg from "../assets/image/Rectangle6.png";
import kidsImg from "../assets/image/Rectangle7.png";

import { useTranslation } from "react-i18next";

function Home() {
  const [t, i18n] = useTranslation();
  return (
    <div className="home">
      <div className="container">
        <div className="homeLeft">
          <h1>{t("Early Childhood Care &amp; Education")}</h1>
          <p>
            {t(
              "Quis at et sollicitudin turpis nisi velit eget eget. Consectetur vel lorem turpis eget faucibus. Nunc sed mi, aliquet in sit tellus commodo nisl proin."
            )}
          </p>
          <button>
            {t("Enroll Now")} <ArrowRightAltIcon />
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
