import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {

  return (
    <div>
      <Navigation />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
        <section id="Projects">
        <Projects/>
      <section id="Education">
        <Education/>
      </section>
    
      </section>
      <section id="contact">
        <Contact />
        </section>
        <Footer />
    </div>
  );
}

export default App;