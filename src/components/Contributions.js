import React from "react";

const Contributions = ({ company, position, date, todo, link }) => (
  <div>
    <div className="app__experience__item">
      <h4 className="let-spc">
        <b>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </b>
      </h4>
      ,{" "}
      <p>
        {position} <span>{date}</span>
      </p>
      <ul>
        {todo.map((post, index) => (
          <li key={index}>{post.point}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Contributions;
