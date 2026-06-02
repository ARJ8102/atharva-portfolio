import { projects } from "../data/portfolioData";

const projectVisuals = {
  "movie-recommender": "🎬",
  "pfas-ml": "🧪",
  "plaque-classify": "🫀",
  "legal-ai": "⚖️",
  "emotion-classifier": "😊",
  "churn-platform": "📊",
};

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-header">
        <h2>Latest Works</h2>
        <span>( 04 )</span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-image ${project.image}`}>
              <span>{projectVisuals[project.image]}</span>
            </div>

            <div className="project-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>

              <span className="project-arrow">→</span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="more-projects">
        <a href="https://github.com/ARJ8102" target="_blank" rel="noreferrer">
          View More on GitHub →
        </a>
      </div>
    </section>
  );
}

export default Projects;