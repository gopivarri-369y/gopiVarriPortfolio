import { FiCode, FiServer, FiDatabase, FiShield, FiTerminal, FiCpu, FiTool, FiLayers } from 'react-icons/fi';
import './Skills.css';

const skillsData = [
  {
    icon: <FiServer size={24} />,
    category: "API Design & Integration",
    items: ["REST APIs", "OpenAPI", "RAML", "MuleSoft", "API Gateway", "API Manager", "Versioning", "Rate Limiting"]
  },
  {
    icon: <FiCode size={24} />,
    category: "Backend",
    items: ["Node.js", "Express.js", "Microservices", "Middleware", "HTTP/HTTPS"]
  },
  {
    icon: <FiDatabase size={24} />,
    category: "Data",
    items: ["DataWeave 2.0", "JSON", "XML", "SQL", "MySQL"]
  },
  {
    icon: <FiShield size={24} />,
    category: "Security",
    items: ["OAuth 2.0", "JWT", "API Authentication"]
  },
  {
    icon: <FiTerminal size={24} />,
    category: "Languages",
    items: ["JavaScript", "Java", "Python", "SQL", "C"]
  },
  {
    icon: <FiCpu size={24} />,
    category: "Machine Learning",
    items: ["CNN", "TensorFlow", "Keras", "LIME", "Flask"]
  },
  {
    icon: <FiTool size={24} />,
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "CI/CD", "Agile"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header-flex">
          <FiLayers className="section-icon" />
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <p className="section-subtitle">The tools and technologies I use to build scalable systems.</p>
        
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="glass-card skill-card hover-anim">
              <div className="skill-header">
                <div className="skill-icon">{skillGroup.icon}</div>
                <h3 className="skill-category gradient-text">{skillGroup.category}</h3>
              </div>
              <div className="skill-tags">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
