import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              {/* Ajoutez d'autres langages si nécessaire */}
            </ul>
          </div>
          <div className="skill">
            <h3>Frontend Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              {/* Ajoutez d'autres frameworks ou technologies frontend si nécessaire */}
            </ul>
          </div>
          <div className="skill">
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Django</li>
              {/* Ajoutez d'autres frameworks ou technologies backend si nécessaire */}
            </ul>
          </div>
          {/* Ajoutez d'autres catégories de compétences si nécessaire */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
