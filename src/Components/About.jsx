
import {
  FaCode,
  FaLightbulb,
  FaBullseye,
  FaLaptopCode,
  FaPalette,
  FaMicrochip,
  FaRocket
}
  from "react-icons/fa";
import "../styles/About.css";

function About() {
  return (
    <div className="about">

      <div className="about-container">

        {/* Heading */}
        <div className="about-heading">
          <span>GET TO KNOW ME</span>
          <h1>About <b>Me</b></h1>
          <p>A little introduction about myself</p>
        </div>

        {/* About Content */}
        <div className="about-content">

          <div className="about-left">
            <h2> I'm <span>Amjath</span></h2>

            <h3>
              <FaCode className="about-icon"/>
              Frontend Developer
              </h3>

            <p>
              I am an enthusiastic Frontend Developer with a strong interest in designing and developing modern, responsive, and user-friendly web applications.
            </p>

            <p>
              I have hands-on knowledge of HTML, CSS, JavaScript, and React, with a focus on building clean interfaces, interactive components, and seamless user experiences.
            </p>
            <p>
              I have hands-on knowledge of HTML, CSS, JavaScript, and React, with a focus on building clean interfaces, interactive components, and seamless user experiences.

            </p>
            <p>
              My goal is to grow as a developer, contribute to meaningful projects, and create digital experiences that combine functionality, usability, and modern design.

            </p>
          </div>

          <div className="about-right">
            <h2>
              <FaBullseye className="about-icon" />

              My <span> Career Goal</span>
            </h2>

            <p>
              My ambition is to grow as a skilled Frontend Developer by building innovative, responsive, and user-focused web applications. I aim to continuously enhance my technical expertise, explore emerging technologies, and deliver meaningful digital experiences through creative problem-solving.

            </p>

            <div className="goal-info">
              <h3>
                <FaLightbulb className="about-icon" />

                My Core Values
              </h3>
              <p>Learn • Innovate • Develop • Grow</p>
            </div>
          </div>

        </div>

        {/* Interests */}
        <div className="interests">

          <h2>My <span>Interests</span></h2>

          <div className="interest-list">

            <div className="interest-card">
              <h3>
                <FaLaptopCode className="about-icon" />
                Web Development
              </h3>
              <p>Creating modern websites</p>
            </div>

            <div className="interest-card">
              <h3>
                <FaPalette className="about-icon" />
                UI Design
              </h3>
              <p>Designing clean interfaces</p>
            </div>

            <div className="interest-card">
              <h3>
                <FaMicrochip className="about-icon" />
                New Technologies
              </h3>
              <p>Learning new skills</p>
            </div>

            <div className="interest-card">
              <h3>
                <FaRocket className="about-icon" />

                Building Projects
              </h3>
              <p>Turning ideas into projects</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;
