
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
            <h2>Hello! I'm <span>Amjath</span></h2>

            <h3>Frontend Developer</h3>

            <p>
              I am a passionate Frontend Developer
              who enjoys creating modern, attractive
              and user-friendly websites.
            </p>

            <p>
              I have learned HTML, CSS, JavaScript
              and React. I enjoy learning new
              technologies and improving my
              development skills through projects.
            </p>
          </div>

          <div className="about-right">
            <h2>My <span>Goal</span></h2>

            <p>
              My goal is to become a professional
              Frontend Developer and build creative
              web applications that provide a
              great user experience.
            </p>

            <div className="goal-info">
              <h3>My Focus</h3>
              <p>Learning • Creating • Improving</p>
            </div>
          </div>

        </div>

        {/* Interests */}
        <div className="interests">

          <h2>My <span>Interests</span></h2>

          <div className="interest-list">

            <div className="interest-card">
              <h3>Web Development</h3>
              <p>Creating modern websites</p>
            </div>

            <div className="interest-card">
              <h3>UI Design</h3>
              <p>Designing clean interfaces</p>
            </div>

            <div className="interest-card">
              <h3>New Technologies</h3>
              <p>Learning new skills</p>
            </div>

            <div className="interest-card">
              <h3>Building Projects</h3>
              <p>Turning ideas into projects</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;
