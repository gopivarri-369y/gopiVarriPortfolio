import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Looking for remote roles or freelance opportunities. Let's build something great together.</p>
        
        <div className="contact-wrapper">
          <div className="glass-card contact-info">
            <h3 className="gradient-text">Contact Information</h3>
            <p className="contact-text">Fill out the form or reach out directly using the info below.</p>
            
            <div className="info-items">
              <div className="info-item">
                <FiMail className="info-icon" />
                <a href="mailto:gopivarri1@gmail.com">gopivarri1@gmail.com</a>
              </div>
              <div className="info-item">
                <FiPhone className="info-icon" />
                <a href="tel:+917286000261">+91-7286000261</a>
              </div>
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://linkedin.com/in/varri-gopi" target="_blank" rel="noreferrer"><FiLinkedin size={24} /></a>
              <a href="https://github.com/varri-gopi" target="_blank" rel="noreferrer"><FiGithub size={24} /></a>
            </div>
          </div>

          <div className="glass-card contact-form-card">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
