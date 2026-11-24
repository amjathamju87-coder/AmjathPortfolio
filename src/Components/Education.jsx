
import "../styles/Education.css";

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
            {/* College Education */}

          <div className="education-card">

            <span className="education-year">
              2024 - 2026
            </span>

            <h2>Postgraduate</h2>

            <h3>kalasalingam University, krishnankoil</h3>
            <h4>Master of Computer Application</h4>

            <p>
                75%
            </p>

            <span className="education-status">
              Higher Education
            </span>

          </div>
            {/* College  ui Education */}

          <div className="education-card">

            <span className="education-year">
              2021 - 2024
            </span>

            <h2>Bachelor's Degree</h2>

            <h3>Sadakathullah Appa college, Tirunelveli</h3>
            <h4>Bachelor of Computer Applications</h4>

            <p>
                60%
            </p>

            <span className="education-status">
              Higher Education
            </span>

          </div>

          

          {/* School Education */}

          <div className="education-card">

            <span className="education-year">
              2020 - 2021
            </span>

            <h2>Higher Secondary Education</h2>

            <h3>SMSS Boys Hr Sec School, Shencottai</h3>

            <p>
                65%
            </p>

            <span className="education-status">
              Completed
            </span>

          </div>

          {/* Secondary Education */}

          <div className="education-card">

            <span className="education-year">
              2018 - 2019
            </span>

            <h2>SSLC</h2>

            <h3>SMSS Boys Hr Sec School,Shencottai</h3>
            <p>
             55%
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
