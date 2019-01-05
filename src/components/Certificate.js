import React, { Component } from 'react';

class Certificate extends Component {
  render() {
    const {title, place} = this.props
    return (
      <div>
        <p><li>{title} <span>{place}</span></li></p>
      </div>
    );
  }
}

export default Certificate;
