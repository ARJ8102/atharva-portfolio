import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <header className="hero-nav">
          <div className="circle-logo">A</div>

          <a className="resume-btn" href={personalInfo.resume}>
            Download PDF Resume
          </a>
        </header>

        <div className="hero-text">
          <h1>
            I&apos;m {personalInfo.name.split(" ")[0]} <span className="wave">👋</span>
            <br />
            {personalInfo.role}
          </h1>

          <p className="hero-description">{personalInfo.intro}</p>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-placeholder">
          <span>AJ</span>
        </div>
      </div>

      <div className="contact-strip">
        <div className="contact-item">
          <span className="contact-icon">✉</span>
          <span>{personalInfo.email}</span>
        </div>

        <div className="contact-item">
          <span className="contact-icon">☎</span>
          <span>{personalInfo.phone}</span>
        </div>

        <div className="contact-item">
          <span className="contact-icon">⌂</span>
          <span>www.atharvajadhav.com</span>
        </div>

        <div className="social-links">
          <a href={personalInfo.github}>GH</a>
          <a href={personalInfo.linkedin}>in</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;