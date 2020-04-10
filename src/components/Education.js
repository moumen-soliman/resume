import React from "react";

const Education = ({ uni, date, dep, undergraduated_course }) => (
  <div>
    <h4>
      {dep} at {uni} <span>{date}</span>
    </h4>
    <p>Undergraduated Course: {undergraduated_course}</p>
  </div>
);

export default Education;
