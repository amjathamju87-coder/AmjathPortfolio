
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">

      <div className="skills-container">

        <h1>My <b>Skills</b></h1>

        <p className="skills-intro">
          Here are the technologies and tools
          I have learned and practiced while
          developing web applications.
        </p>

        <div className="skills-list">

          <div className="skill">
            <div className="skill-info">
              <h3>HTML</h3>
              <span>90%</span>
            </div>
            <div className="progress-bar">
              <div className="html-progress"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <h3>CSS</h3>
              <span>85%</span>
            </div>
            <div className="progress-bar">
              <div className="css-progress"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <h3>JavaScript</h3>
              <span>75%</span>
            </div>
            <div className="progress-bar">
              <div className="javascript-progress"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <h3>React JS</h3>
              <span>70%</span>
            </div>
            <div className="progress-bar">
              <div className="react-progress"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Skills;
