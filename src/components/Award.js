import React from "react";

const Award = ({ title, date, description }) => (
  <div>
    <p>
      {title} <span>{date}</span>
    </p>
    <li>
      <span>{description}</span>
    </li>
  </div>
);

export default Award;
