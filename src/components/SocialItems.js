import React from "react";

const SocialItems = ({ name, link, logo }) => (
  <a
    className="social-item"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={logo} alt={`${name} logo`} />
  </a>
);

export default SocialItems;
