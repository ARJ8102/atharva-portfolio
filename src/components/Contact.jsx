import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <h2>Contact Me</h2>
        <span>( 05 )</span>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <h3>Let&apos;s build something useful with AI.</h3>

          <p>
            I am open to machine learning, AI engineering, MLOps, data science,
            and software development opportunities.
          </p>

          <div className="contact-details">
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <span>{personalInfo.location}</span>
          </div>

          <div className="contact-socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea placeholder="Message" rows="6"></textarea>

          <button type="button">Send Message →</button>
        </form>
      </div>

      <footer className="footer">
        <p>© 2026 Atharva Jadhav. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;