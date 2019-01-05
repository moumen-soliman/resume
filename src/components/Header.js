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
          <b>Born:</b> {born}
        </span><br/>
        <span>
          <b>Contacts:</b> {mobile} / <a href={`mailto:${email}`}>{email}</a>
        </span>
      </div>
    );
  }
}

export default Header;
