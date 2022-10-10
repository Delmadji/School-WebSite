import React from "react";
import { useTranslation } from "react-i18next";

function Translation() {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <h1>{t("title")} </h1>
      <button
        onClick={() => {
          i18n.changeLanguage("ar");
        }}
      >
        AR
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("fr");
        }}
      >
        FR
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        EN
      </button>
    </div>
  );
}

export default Translation;
