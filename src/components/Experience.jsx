import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header-flex">
          <FiBriefcase className="section-icon" />
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <p className="section-subtitle">My career journey and roles in the tech industry.</p>
        
        <div className="timeline">
          <div className="timeline-item glass-card hover-anim">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Associate Software Engineer</h3>
                <h4 className="timeline-company">ProwessSoft</h4>
              </div>
              <div className="timeline-meta">
                <span className="timeline-date">Apr 2024 – Present</span>
                <span className="timeline-location">Hyderabad, India</span>
              </div>
            </div>
            
            <ul className="timeline-details">
              <li>Built REST APIs using MuleSoft with API-led architecture.</li>
              <li>Worked on JWPower integration project.</li>
              <li>Implemented DataWeave transformations.</li>
              <li>Applied OAuth2/JWT security and API policies.</li>
              <li>Collaborated in Agile teams.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
