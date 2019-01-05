import React, { Component } from 'react';

class Award extends Component {
  render() {
    const {title, date, description} = this.props
    return (
      <div>
        <p>{title} <span>{date}</span></p>
        <li><span>{description}</span></li>
      </div>
    );
  }
}

export default Award;
