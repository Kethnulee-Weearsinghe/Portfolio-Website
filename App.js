import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-right">
          <a
            href="https://github.com/Kethnulee-Weearsinghe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kethnulee-weerasinghe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className="hero" id="home">
                <div className="intro-text">
                  <h1>Kethnulee</h1>
                  <p className="subtitle">BEng (Hons) Software Engineering</p>

                  <p>
                    Aspiring Frontend Developer seeking an internship to build modern, responsive, and user-focused web interfaces using the latest UI technologies.
                  </p>
                  <a className="cta-button" href="/Kethnulee-CV.pdf" download>
                    Download CV
                  </a>
                </div>

                <div className="profile-image">
                  <img src="/my-photo.png" alt="Kethnulee" />
                </div>
              </div>

              <div className="card-row">
                <div className="card">
                  <h3>UI/UX Design</h3>
                  <p>
                    Creates intuitive, accessible, and aesthetically pleasing interfaces using modern design principles.
                  </p>
                </div>
                <div className="card">
                  <h3>Frontend Development</h3>
                  <p>
                    Proficient in HTML, CSS, JavaScript, React, and Tailwind. Focused on clean code, component-based architecture, and seamless API integration.
                  </p>
                </div>
                <div className="card">
                  <h3>Problem Solving</h3>
                  <p>
                    Applies critical thinking and debugging skills to deliver scalable solutions that enhance user experience.
                  </p>
                </div>
              </div>
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
