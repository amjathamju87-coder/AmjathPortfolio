
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
            Hellow, I'm <span>Amjath</span>
          </h1>

          <h2>Frontend Developer.</h2>

          <p className="description">
            I’m a passionate Frontend Developer dedicated to building modern, responsive, and user-friendly web applications.
          </p>

          <p className="description">
            I specialize increating clean and interactive web interfaces using HTML, CSS, JavaScript, and React. I focus on delivering seamless user experiences through creative designs and efficient development.
          </p>
          <p className="description">

            I’m continuously exploring new technologies, enhancing my technical skills, and turning creative ideas into functional digital experiences.
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
