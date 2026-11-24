
import "../styles/Footer.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Amjath M</h2>

      <p>Frontend Developer</p>

     
      <div className="footer-icons">

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:amjathamju87@gmail.com">
          <FaEnvelope/>
        </a>

      </div>

      

    </footer>
  );
}

export default Footer;
