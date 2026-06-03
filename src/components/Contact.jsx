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

       <form
  className="contact-form"
  name="contact"
  method="POST"
  data-netlify="true"
>
  <input type="hidden" name="form-name" value="contact" />

  <div className="form-row">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
  </div>

  <input type="text" name="subject" placeholder="Subject" required />

  <textarea name="message" placeholder="Message" rows="6" required></textarea>

  <button type="submit">Send Message →</button>
</form>
      </div>

      <footer className="footer">
        <p>© 2026 Atharva Jadhav. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;