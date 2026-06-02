import { aboutInfo, languages, stats } from "../data/portfolioData";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-header">
        <h2>About Me</h2>
        <span>( 01 )</span>
      </div>

      <div className="about-content">
        <div className="about-graphic" aria-hidden="true">
          <div className="graphic-circle graphic-circle-orange"></div>
          <div className="graphic-circle graphic-circle-black"></div>
        </div>

        <div className="about-details">
          <p className="about-description">{aboutInfo.description}</p>

          <div className="stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="language-row">
            <div className="language-label">
              <span>文</span>
              Language
            </div>

            <div className="language-pills">
              {languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;