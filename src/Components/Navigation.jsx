import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Amjath<span>.portfolio</span>
      </h2>
      <div className="nav-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#Education">Education</a>
        <a href="#Projects">Projects</a>
        <a href="#contact">Contact</a>



      </div>

    </nav>
  );
}

export default Navigation;
