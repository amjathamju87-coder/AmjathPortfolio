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

            <a href="https://github.com/amjathamju87-coder/AmjathPortfolio" className="project-link">
              View code →
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

            <a href="https://github.com/amjathamju87-coder/AmjathPortfolio" className="project-link">
              View Code→
            </a>

          </div>

          {/* Project 3 */}

          <div className="project-card">

            <span className="project-number">03</span>

            <h2>Coffee Shop</h2>

            <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta necessitatibus, tempore veniam sint nihil, harum distinctio dignissimos placeat amet vel aliquid repellat laudantium explicabo dolor sit nulla. Eveniet, quos in?
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a href="https://github.com/amjathamju87-coder/coffee-shop" className="project-link">
              View Code →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;
