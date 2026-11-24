
import { useState } from "react";
import "../styles/Navigation.css";

import {
  FaHome,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
  FaBars
} from "react-icons/fa";

function Navigation() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">
        Amjath<span>.portfolio</span>
      </h2>

      {/* Hamburger Icon */}
      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#home" onClick={() => setMenuOpen(false)}>
          <FaHome /> Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          <FaUser /> About
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          <FaCode /> Skills
        </a>

        <a href="#Projects" onClick={() => setMenuOpen(false)}>
          <FaProjectDiagram /> Projects
        </a>

        <a href="#Education" onClick={() => setMenuOpen(false)}>
          <FaGraduationCap /> Education
        </a>



        <a href="#contact" onClick={() => setMenuOpen(false)}>
          <FaEnvelope /> Contact
        </a>

      </div>

    </nav>
  );
}

export default Navigation;
