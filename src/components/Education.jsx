import { FiBookOpen, FiAward, FiStar } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header-flex">
          <FiBookOpen className="section-icon" />
          <h2 className="section-title">Education & Achievements</h2>
        </div>
        <p className="section-subtitle">My academic background and professional milestones.</p>
        
        <div className="edu-grid">
          <div className="glass-card edu-card hover-anim">
            <div className="edu-icon"><FiBookOpen size={24} /></div>
            <h3 className="edu-category gradient-text">Education</h3>
            
            <div className="edu-item">
              <h4 className="edu-title">B.E. Information Technology</h4>
              <p className="edu-org">Vasavi College of Engineering</p>
              <div className="edu-meta">
                <span className="highlight-tag">CGPA: 8.20</span>
              </div>
            </div>
          </div>

          <div className="glass-card edu-card hover-anim">
            <div className="edu-icon"><FiAward size={24} /></div>
            <h3 className="edu-category gradient-text">Certifications</h3>
            
            <ul className="modern-list">
              <li>Salesforce Trailhead Badges</li>
              <li>NPTEL Python</li>
              <li>NPTEL Java</li>
            </ul>
          </div>

          <div className="glass-card edu-card hover-anim">
            <div className="edu-icon"><FiStar size={24} /></div>
            <h3 className="edu-category gradient-text">Achievements</h3>
            
            <ul className="modern-list">
              <li>1st Prize — T-Hub Hackathon</li>
              <li>Best IoT Project Award</li>
              <li>Consistent Academic Excellence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
