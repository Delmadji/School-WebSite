import React from "react";
import "./Card.css";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { useTranslation } from "react-i18next";

function Card() {
  const [t, i18n] = useTranslation();
  return (
    <div className="card">
      <Avatar sx={{ bgcolor: green[500] }}>
        <AssignmentIcon />
      </Avatar>
      <h3 className="cardTitle">{t("Best Teachers")}</h3>
      <p className="cardParagraphe">
        {t(
          "Diam condimentum morbi vive rr a lacus, sollicitudin sagittis, est. Ut arcu vestibulum accum san bibe ndum mollis pharetra."
        )}
      </p>
    </div>
  );
}

export default Card;
