import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Available for Work</div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Varri Gopi</span>
          </h1>
          <h2 className="hero-subtitle">
            Backend Developer & API Designer
          </h2>
          <p className="hero-description">
            Specializing in enterprise RESTful API design, microservices integration, and scalable backend architecture. Building seamless digital experiences.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/varri-gopi" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/varri-gopi" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={22} />
            </a>
            <a href="mailto:gopivarri1@gmail.com" aria-label="Email">
              <FiMail size={22} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="visual-circle circle-3"></div>
          <div className="glass-card visual-card">
            <div className="code-block">
              <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'} <br/>
              &nbsp;&nbsp;name: <span className="code-string">"Varri Gopi"</span>, <br/>
              &nbsp;&nbsp;role: <span className="code-string">"Backend Engineer"</span>, <br/>
              &nbsp;&nbsp;skills: [<span className="code-string">"Node.js"</span>, <span className="code-string">"MuleSoft"</span>] <br/>
              {'}'};
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
