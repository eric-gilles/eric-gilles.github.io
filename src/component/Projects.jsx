import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1...</p>
          {/* Ajoutez d'autres informations sur le projet, comme des liens vers le code source ou la démo */}
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2...</p>
          {/* Ajoutez d'autres informations sur le projet, comme des liens vers le code source ou la démo */}
        </div>
        {/* Ajoutez d'autres projets si nécessaire */}
      </div>
    </section>
  );
};

export default Projects;
