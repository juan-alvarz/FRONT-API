import React from "react";
import githubImg from "../../images/github.png";
import googleImg from "../../images/google.png";
import linkedinImg from "../../images/linkedin.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const style = {
  img: {
    width: "100px",
  },
};

function Footer() {
  return (
    <footer>
      <div className="contact-links-main">
        <div className="contact-links">
          <a href="https://github.com/juan-alvarz" target="_BLANK">
            <img src={githubImg} alt="image not found" />
          </a>
          <a href="mailto:juanalvarez0925@gmail.com" target="_BLANK">
            <img src={googleImg} alt="image not found" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-alvarez-8857aa18b/"
            target="_BLANK"
          >
            <img src={linkedinImg} alt="image not found" />
          </a>
        </div>
      </div>
      <span className="about-footer">
        © Copyright 2021, All Rights Reserved. Developed by{" "}
        <a
          href="https://www.linkedin.com/in/juan-alvarez-8857aa18b/"
          target="_BLANK"
        >
          Juan E. Alvarez
        </a>
      </span>
    </footer>
  );
}

export default Footer;
