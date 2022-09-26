import React from "react";
import "./Services.css";
import Card from "./Card";

function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="servicesTop">
          <div className="servicesTop__left">
            <h2>
              Providin Good Qualities <br />
              For Your Loving Kids
            </h2>
          </div>
          <div className="servicesTop__right">
            <p>
              Consequat interdum massa molestie varius facilisi <br /> lectus
              libero, morbi pretium. Volutpat cursus sollicit <br />
              udin blandit posuere facilisi volutpat
            </p>
          </div>
        </div>
        <div className="servicesBottom">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Services;
