import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {name, position, born, email, mobile} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <span>{position}</span>
        <br/>
        <span>
          <b className="let-spc">Born:</b> {born}
        </span><br/>
        <span>
          <b className="let-spc">Contacts:</b> {mobile} / <a href={`mailto:${email}`}>{email}</a>
        </span>
      </div>
    );
  }
}

export default Header;
