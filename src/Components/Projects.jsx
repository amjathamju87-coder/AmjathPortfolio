import "../styles/Project.css";
function Projects() {
  return (
    <div className="projects">

      <div className="projects-container">

        <h1>My <b>Projects</b></h1>

        <p className="projects-intro">
          Here are some of the projects I have
          developed using my frontend development
          skills and technologies.
        </p>

        <div className="project-list">

          {/* Project 1 */}

          <div className="project-card">

            <span className="project-number">01</span>

            <h2>Personal Portfolio</h2>

            <p>
              A personal portfolio website designed
              to showcase my skills, education,
              projects and contact information.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
            </div>

            <a href="#home" className="project-link">
              View Project →
            </a>

          </div>

          {/* Project 2 */}

          <div className="project-card">

            <span className="project-number">02</span>

            <h2>Employee Portal</h2>

            <p>
              An employee management portal that
              displays employee information such
              as name, email and location.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a href="#home" className="project-link">
              View Project →
            </a>

          </div>

          {/* Project 3 */}

          <div className="project-card">

            <span className="project-number">03</span>

            <h2>Registration Form</h2>

            <p>
              A registration form with input fields,
              form validation and error messages
              to provide a better user experience.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a href="#home" className="project-link">
              View Project →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;
