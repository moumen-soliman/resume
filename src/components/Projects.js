import React from "react";

const Projects = ({ name, description, link }) => (
  <div>
    <div className="app__projects__item">
      <p>
        <b className="let-spc">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}:
          </a>
        </b>{" "}
        {description}
      </p>
    </div>
  </div>
);

export default Projects;
