import React, { Component } from 'react';

class SocialItems extends Component {
  render() {
    const {name, link, logo} = this.props
    return (
        <a className="social-item" href={link} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={`${name} logo`}/>
        </a>
    );
  }
}

export default SocialItems;
