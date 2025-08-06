import "./App.css";

function Education() {
  return (
    <div className="education-section" id="education">
      <h2>Education</h2>
      <div className="timeline-wrapper">

        <div className="timeline-item left">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <h3>BEng (Hons) in Software Engineering (TOP UP) – London Metropolitan University (UK)</h3>
            <p className="timeline-place">London Metropolitan University (UK)</p>
            <p className="timeline-year">2024-2025</p>
          </div>
        </div>

        <div className="timeline-item right">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <h3>Level 5 Pearson BTEC HND in Computing (General)</h3>
            <p className="timeline-place">Pearson College London</p>
            <p className="timeline-year">2022-2024</p>
          </div>
        </div>

        <div className="timeline-item left">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <h3>Pearson (DiTech) Diploma in Information and Communication Technology</h3>
            <p className="timeline-place">Esoft Metro College</p>
            <p className="timeline-year">2022-2023</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;








