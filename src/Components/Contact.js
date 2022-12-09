import React, { useState } from "react";
import "./Contact.css";

import { useTranslation } from "react-i18next";

function Contact() {
  const [t, i18n] = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <div
        className={"container" + " " + (i18n.language == "ar" ? "arab" : " ")}
      >
        <div className="contact__left">
          <h3>{t("Join Us And Stay Tuned!")}</h3>
          <p>
            {t(
              "Consequat interdum massa molestie varius facilisi lectus libero, morbi pretium. Volutpat cursus sollicit udin blandit posuere facilisi volutpat"
            )}
          </p>
        </div>
        <div className="contact__right">
          <form>
            <input
              className="name"
              type="text"
              value={name}
              placeholder={t("Your Name")}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="email"
              type="text"
              value={email}
              placeholder={t("Your Email")}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <textarea
              className="message"
              type="text"
              value={message}
              placeholder={t("Message")}
              onChange={(e) => setMessage(e.target.value)}
            />{" "}
            <br />
            <input
              className="button"
              type="button"
              value={t("send a message")}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
