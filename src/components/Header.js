import React from "react";

const Header = ({ name, position, born, email, mobile }) => (
  <div>
    <h1>{name}</h1>
    <span>{position}</span>
    <br />
    <span>
      <b className="let-spc">Born:</b> {born}
    </span>
    <br />
    <span>
      <b className="let-spc">Contacts:</b> {mobile} /{" "}
      <a href={`mailto:${email}`}>{email}</a>
    </span>
  </div>
);

export default Header;
