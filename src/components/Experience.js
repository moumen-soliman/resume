import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const {company, position, date, description, logo, todo} = this.props
    return (
      <div>
        <div className="app__experience__item">
            {todo.map(post => <li>{post.point}</li>)}
        </div>
      </div>
    );
  }
}

export default Experience;
