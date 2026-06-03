import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-left">
        <header className="hero-nav">
          <div className="circle-logo">A</div>

          <a
  className="resume-btn"
  href={personalInfo.resume}
  target="_blank"
  rel="noreferrer"
>
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
  <img className="hero-photo" src="/profile3.jpg" alt="Atharva Jadhav" />
</div>

      <div className="contact-strip">
        <div className="contact-item">
          <span className="contact-icon">✉</span>
          <span>{personalInfo.email}</span>
        </div>

        <div className="contact-item">
          <span className="contact-icon">⌂</span>
          <span>{personalInfo.location}</span>
        </div>

        <div className="social-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GH
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            in
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;