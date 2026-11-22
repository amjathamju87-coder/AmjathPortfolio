
import "../styles/Home.css";
import amjath from "../Assets/amjath_pic.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home-container">

        {/* Left Content */}
        <div className="home-content">

          <span className="welcome">
            Welcome to my portfolio
          </span>

          <h1>
            Hi, I'm <span>Amjath</span>
          </h1>

          <h2>Frontend Developer.</h2>

          <p className="intro">
            I'm <b>Amjath</b>
          </p>

          <p className="description">
            Welcome to my portfolio! I am passionate
            about web development and creating
            beautiful, user-friendly websites.
          </p>

          <p className="description">
            I have learned HTML, CSS, JavaScript
            and React. I enjoy learning new
            technologies and building projects.
          </p>

          <div className="home-buttons">
            <a href="#Projects" className="project-btn">
              View My Projects →
            </a>

            <a href="#contact" className="contact-btn">
              Contact Me
            </a>
          </div>

        </div>

        {/* Right Side Image */}
        <div className="home-image">
          <img src={amjath} alt="Amjath Profile" />
        </div>

      </div>
    </div>
  );
}

export default Home;
