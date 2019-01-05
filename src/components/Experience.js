import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const {company, position, date, description, logo, todo, link} = this.props
    return (
      <div>
        <div className="app__experience__item">
            <h4 className="let-spc">{company}</h4>,
            <p> {position} <span>{date}</span></p>
            <ul>
                {todo.map(post => <li>{post.point}</li>)}
            </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
