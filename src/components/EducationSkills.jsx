import {
  SiDocker,
  SiFastapi,
  SiFlask,
  SiHuggingface,
  SiKubernetes,
  SiLangchain,
  SiMlflow,
  SiPython,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";

import { education, skills } from "../data/portfolioData";

const skillIcons = {
  python: <SiPython className="python-icon" />,
  deepLearning: (
    <div className="multi-icon">
      <SiPytorch className="pytorch-icon" />
      <SiTensorflow className="tensorflow-icon" />
    </div>
  ),
  transformers: <SiHuggingface className="huggingface-icon" />,
  langchain: <SiLangchain className="langchain-icon" />,
  api: (
    <div className="multi-icon">
      <SiFastapi className="fastapi-icon" />
      <SiFlask className="flask-icon" />
    </div>
  ),
  docker: <SiDocker className="docker-icon" />,
  kubernetes: <SiKubernetes className="kubernetes-icon" />,
  mlflow: <SiMlflow className="mlflow-icon" />,
};

function EducationSkills() {
  return (
    <section className="section education-section" id="education">
      <div className="section-header">
        <h2>Education & Skills</h2>
        <span>( 03 )</span>
      </div>

      <div className="education-skills-content">
        <div className="education-list">
          {education.map((item) => (
            <div className="education-item" key={item.degree}>
              <div className="education-dot"></div>

              <div>
                <h3>
                  {item.degree} - {item.period}
                </h3>
                <h4>{item.school}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skillIcons[skill.icon]}</div>

              <h3>{skill.name}</h3>

              <div className="skill-dots" aria-label={`${skill.level} out of 5`}>
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span
                    key={dot}
                    className={dot <= skill.level ? "filled" : ""}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSkills;