import React, { useState } from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const [email, setEmail] = useState("Enter your Email");
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col">
            <ul>
              <li>
                <h2>Contact Us</h2>
              </li>
              <li>
                <h4>Call Us</h4>
                <p>+213 542 788 098</p>
              </li>
              <li>
                <h4>School Hours</h4>
                <p>Mon - Fri 8 AM - 5 PM</p>
              </li>
              <li>
                <h4>Location</h4>
                <p>Franklin St, Greenpoint Ave</p>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <ul>
              <h2>Usefull Links</h2>
              <li>
                <h4>Online Class</h4>
              </li>
              <li>
                <h4>UpComming Events</h4>
              </li>
              <li>
                <h4>Appointment</h4>
              </li>
              <li>
                <h4>Online Class</h4>
              </li>
              <li>
                <h4>Events</h4>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <ul>
              <h2>Help &amp; Support</h2>
              <li>
                <h4>Facebook Group</h4>
              </li>
              <li>
                <h4>Customer Services</h4>
              </li>
              <li>
                <h4>Forum</h4>
              </li>
              <li>
                <h4>Youtube</h4>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h2>Subscribe</h2>
            <h4>Subscribe</h4>
            <form>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button>Subscribe</button>
            </form>
            <h1>EL SIRADJ SCHOOL</h1>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <p>&copy; 2021 riead - All Rights Reserved Made by Ibne Riead</p>
          </div>
          <div className="footer__bottom__right">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
