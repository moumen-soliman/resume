import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {name, position, born, email, mobile} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <span>{position}</span>
        <br/><br/>
        <span>
          <b>Born:</b> {born}
        </span><br/>
        <span>
          <b>Email:</b> <a href={`mailto:${email}`}>{email}</a>
        </span><br/>
        <span>
          <b>Mobile:</b> {mobile}
        </span>
      </div>
    );
  }
}

export default Header;
