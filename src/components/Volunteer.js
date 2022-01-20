import React from "react";

const Volunteer = ({ title, date, description }) => (
  <div>
    <p>
      {title} <span>{date}</span>
    </p>
    {description && (
      <li>
        <span>{description}</span>
      </li>
    )}
  </div>
);

export default Volunteer;
