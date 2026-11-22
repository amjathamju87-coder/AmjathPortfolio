
import "../styles/Footer.css";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Amjath</h2>

      <p>Frontend Developer | React Developer</p>

     
      <div className="footer-icons">

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://www.instagram.com/_amjath.amju_?jplx=MTQ5bTJqOWNudG8xZQ%3D%3D">
          <FaInstagram />
        </a>

      </div>

      <p className="footer-copy">
        © 2026 Amjath. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;
