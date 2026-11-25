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
              Designed and developed a modern, responsive personal portfolio website to showcase
              my technical skills, educational background, and projects. Features a clean 
              interface, intuitive navigation, and dedicated sections to highlight 
              my work, experience, and contact information.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
            </div>

            <a
              href="https://amjathamju87-coder.github.io/AmjathPortfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>

          {/* Project 2 */}

          <div className="project-card">

            <span className="project-number">02</span>

            <h2>Task Dashboard</h2>

            <p>
              Designed and developed a Smart Task Dashboard using HTML, CSS, and JavaScript, featuring task creation, editing, deletion, priority management, and progress tracking through a clean, responsive, and user-friendly interface.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://amjathamju87-coder.github.io/SmartTaskdashboardd/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>

          {/* Project 3 */}

          <div className="project-card">

            <span className="project-number">03</span>

            <h2>Coffee Shop</h2>

            <p>
              Designed and developed a modern, responsive Coffee Shop Website using HTML, CSS, and JavaScript, featuring an interactive menu, coffee product showcase, engaging homepage, and user-friendly navigation to enhance the customer experience.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://amjathamju87-coder.github.io/coffee-shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;
