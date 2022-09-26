import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("Your Name");
  const [email, setEmail] = useState("your Email");
  const [message, setMessage] = useState("Message");

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__left">
          <h3>
            Join Us <br />
            And Stay Tuned!
          </h3>
          <p>
            Consequat interdum massa molestie varius facilisi <br />
            lectus libero, morbi pretium. Volutpat cursus sollicit <br /> udin
            blandit posuere facilisi volutpat
          </p>
        </div>
        <div className="contact__right">
          <form>
            <input
              className="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <textarea
              className="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />{" "}
            <br />
            <input className="button" type="button" value="send a message" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
