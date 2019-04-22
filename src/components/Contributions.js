import React, { Component } from 'react';

class Contributions extends Component {
  render() {
    const {company, position, date, todo, link} = this.props
    return (
      <div>
        <div className="app__experience__item">
            <h4 className="let-spc">
              <b>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {company}
                </a>
              </b>
            </h4>,
            <p> {position} <span>{date}</span></p>
            <ul>
                {todo.map(post => <li>{post.point}</li>)}
            </ul>
        </div>
      </div>
    );
  }
}

export default Contributions;
