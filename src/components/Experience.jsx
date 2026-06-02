import { experiences } from "../data/portfolioData";

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-header">
        <h2>Experience</h2>
        <span>( 02 )</span>
      </div>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <div className="experience-item" key={`${item.period}-${item.role}`}>
            <div className="experience-left">
              <h3>{item.period}</h3>
              <p>{item.role}</p>
            </div>

            <div className="experience-center">
              <span className={index === 1 ? "timeline-dot active" : "timeline-dot"}></span>
            </div>

            <div className="experience-middle">
              <h4>{item.organization}</h4>
              <p>{item.type}</p>
            </div>

            <div className="experience-right">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;