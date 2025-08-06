import "./App.css";

function Skills() {
  return (
    <div className="skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skill-category">
        <h3>Frontend Development</h3>
        <div className="skill-tags">
          <span className="skill-tag">React.js</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
          <span className="skill-tag">Tailwind CSS</span>
          <span className="skill-tag">Bootstrap</span>
          <span className="skill-tag">Responsive Design</span>
          <span className="skill-tag">Web Speech API</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Backend & APIs</h3>
        <div className="skill-tags">
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">PHP</span>
          <span className="skill-tag">C#</span>
          <span className="skill-tag">ASP.NET MVC</span>
          <span className="skill-tag">.NET Framework</span>
          <span className="skill-tag">Entity Framework</span>
          <span className="skill-tag">RESTful APIs</span>
          <span className="skill-tag">Nodemailer</span>
          <span className="skill-tag">Authentication & RBAC</span>
          <span className="skill-tag">Fetch API</span>
          <span className="skill-tag">HTTP</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Databases</h3>
        <div className="skill-tags">
          <span className="skill-tag">MySQL</span>
          <span className="skill-tag">SQL Server</span>
          <span className="skill-tag">PHPMyAdmin</span>
          <span className="skill-tag">SQL</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>UI/UX & Tools</h3>
        <div className="skill-tags">
          <span className="skill-tag">Figma</span>
          <span className="skill-tag">Canva</span>
          <span className="skill-tag">Draw.io</span>
          <span className="skill-tag">Postman</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">VS Code</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Development Concepts</h3>
        <div className="skill-tags">
          <span className="skill-tag">Async/Await</span>
          <span className="skill-tag">CRUD Operations</span>
          <span className="skill-tag">JSON</span>
          <span className="skill-tag">Role-Based Access Control (RBAC)</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
