import React, { Component } from 'react';

class Education extends Component {
  render() {
    const {uni, date, dep, undergraduated_course} = this.props
    return (
      <div>
        <h4>{dep} at {uni} <span>{date}</span></h4>
        <p>Undergraduated Course: {undergraduated_course}</p>
      </div>
    );
  }
}

export default Education;
