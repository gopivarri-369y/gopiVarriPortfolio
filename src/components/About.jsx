import { FiUser } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header-flex">
          <FiUser className="section-icon" />
          <h2 className="section-title">Professional Summary</h2>
        </div>
        <p className="section-subtitle">A brief introduction to who I am and what I do.</p>
        
        <div className="about-content">
          <div className="glass-card about-card">
            <p className="about-text">
              <strong>Backend Developer and API Designer</strong> with experience in enterprise RESTful API design, API-led connectivity, and microservices integration using MuleSoft Anypoint Platform.
            </p>
            <p className="about-text">
              Skilled in OpenAPI/RAML, DataWeave 2.0, OAuth 2.0, JWT, Node.js, Express.js, and MySQL. Strong in API security, error handling, and scalable backend systems in Agile environments.
            </p>
          </div>

          <div className="about-stats">
            <div className="glass-card stat-card">
              <h3 className="gradient-text">1+</h3>
              <p>Years Experience</p>
            </div>
            <div className="glass-card stat-card">
              <h3 className="gradient-text">API</h3>
              <p>Design Expert</p>
            </div>
            <div className="glass-card stat-card">
              <h3 className="gradient-text">Node</h3>
              <p>& MuleSoft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
