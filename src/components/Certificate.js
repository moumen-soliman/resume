import React from "react";

const Certificate = ({ title, place, credential_url }) => (
  <li className="pd-btm">
    {title}
    <span> {place} </span>
    {credential_url && (
      <a href={credential_url} target="_blank">
        See credential
      </a>
    )}
  </li>
);

export default Certificate;
