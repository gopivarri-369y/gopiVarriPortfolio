import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projectsData = [
  {
    title: "Hostel Management System",
    year: "2024",
    tech: ["Node.js", "Express.js", "MySQL"],
    description: [
      "Backend using Node.js, Express, MySQL.",
      "REST APIs for student and hostel management.",
      "Email automation with Nodemailer."
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Pneumonia Detection (AI Project)",
    year: "2023",
    tech: ["Python", "CNN", "TensorFlow", "Keras", "Flask"],
    description: [
      "CNN model with 96% accuracy.",
      "Flask API for predictions.",
      "Explainable AI using LIME."
    ],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header-flex">
          <FiFolder className="section-icon" />
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <p className="section-subtitle">Some of the impactful projects I have built.</p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="glass-card project-card hover-anim">
              <div className="project-header">
                <h3 className="project-title gradient-text">{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} aria-label="GitHub Repository"><FiGithub size={20} /></a>
                  <a href={project.live} aria-label="Live Project"><FiExternalLink size={20} /></a>
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <ul className="project-description">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
