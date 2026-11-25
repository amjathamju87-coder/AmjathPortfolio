import "../styles/Education.css";

import {
  FaGraduationCap,
  FaUniversity,
  FaBookOpen,
  FaSchool,
  FaCalendarAlt,
  FaAward
} from "react-icons/fa";

function Education() {
  return (
    <div className="education">

      <div className="education-container">

        <h1>My <b>Education</b></h1>

        <p className="education-intro">
          My educational journey and academic
          background that helped me build my
          knowledge and technical skills.
        </p>

        <div className="education-list">

          {/* Postgraduate */}

          <div className="education-card">

            <span className="education-year">
              <FaCalendarAlt /> 2024 - 2026
            </span>

            <h2>
              <FaGraduationCap /> Postgraduate
            </h2>

            <h3>
              <FaUniversity /> Kalasalingam University, Krishnankoil
            </h3>

            <h4>
              Master of Computer Application
            </h4>

            <p>
              <FaAward /> 75%
            </p>

            <span className="education-status">
              Higher Education
            </span>

          </div>

          {/* Undergraduate */}

          <div className="education-card">

            <span className="education-year">
              <FaCalendarAlt /> 2021 - 2024
            </span>

            <h2>
              <FaGraduationCap /> Bachelor's Degree
            </h2>

            <h3>
              <FaUniversity /> Sadakathullah Appa College, Tirunelveli
            </h3>

            <h4>
              Bachelor of Computer Applications
            </h4>

            <p>
              <FaAward /> 60%
            </p>

            <span className="education-status">
              Higher Education
            </span>

          </div>

          {/* Higher Secondary */}

          <div className="education-card">

            <span className="education-year">
              <FaCalendarAlt /> 2020 - 2021
            </span>

            <h2>
              <FaBookOpen /> Higher Secondary Education
            </h2>

            <h3>
              <FaSchool /> SMSS Boys Hr Sec School, Shencottai
            </h3>

            <p>
              <FaAward /> 65%
            </p>

            <span className="education-status">
              Completed
            </span>

          </div>

          {/* SSLC */}

          <div className="education-card">

            <span className="education-year">
              <FaCalendarAlt /> 2018 - 2019
            </span>

            <h2>
              <FaBookOpen /> SSLC
            </h2>

            <h3>
              <FaSchool /> SMSS Boys Hr Sec School, Shencottai
            </h3>

            <p>
              <FaAward /> 55%
            </p>

            <span className="education-status">
              Completed
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Education;