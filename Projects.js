import "./App.css";

function Projects() {
  return (
    <div className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Porsche AI ChatBot</h3>
          <p>
Web-based assistant using OpenAI’s language model and Web Speech API to answer automotive questions with voice-enabled, responsive user interaction.
          </p>
          <p className="tech">Tech: JavaScript, HTML5, React, CSS, OpenAI API, Web Speech API, Fetch API</p>
          <a
            href="https://github.com/Kethnulee-Weearsinghe/Porsche-AI-ChatBot"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
Built a personal portfolio using React to display skills, projects, and education with a clean, professional layout and responsive design.
          </p>
          <p className="tech">Tech: React, HTML5, CSS, JavaScript, Fetch API, Netlify</p>
          <a
            href="https://github.com/Kethnulee-Weearsinghe/Portfolio-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
<div className="project-card">
          <h3>BookHaven</h3>
          <p>
C# Windows Forms app for bookstore management, featuring role-based access, inventory control, sales processing, customer/supplier management, order tracking, and reporting tools. </p>
          <p className="tech">Tech: C#, .NET Framework, SQL</p>
          <a
            href="https://github.com/Kethnulee-Weearsinghe/BookHaven"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

     

       

        {/* Add more projects as needed */}
      </div>
    </div>
  );
}

export default Projects;
