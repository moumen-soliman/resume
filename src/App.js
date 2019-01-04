import React, { Component } from 'react';
import './assets/style/app.scss';
import stackOverFlow from './assets/img/stackoverflow.png';
import gitHub from './assets/img/github.svg';
import linkedIn from './assets/img/linkedin.png';
import medium from './assets/img/medium.png';
import hackerRank from './assets/img/hackerrank.png';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="app__header">
            <h1>Moumen Soliman</h1>
            <span>Front-end Developer</span>
            <div className="app__header__info">
              <div className="col-md-12">
                <span>
                  <b>Born:</b> 19 Oct 1995 / Cairo, Egypt
                </span><br/>
                <span>
                  <b>Email:</b> <a href="mailto:moumensoliman@gmail.com">moumensoliman@gmail.com</a>
                </span><br/>
                <span>
                  <b>Mobile:</b> +201128412656
                </span><br/>
                <span>
                  <b>Education:</b>  Cairo higher Institute - Computer Science
                </span>
              </div>
              <div className="social-items col-md-12">
                <a className="social-item col-md-1" href="https://stackoverflow.com/users/8960519/moumen-soliman" target="_blank" rel="noopener noreferrer">
                  <img src={stackOverFlow} alt="stackoverflow logo"/>
                </a>
                <a className="social-item col-md-1" href="https://github.com/moumen-soliman" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} alt="github logo"/>
                </a>
                <a className="social-item col-md-1" href="https://www.linkedin.com/in/moumensoliman/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedIn} alt="linkedin logo"/>
                </a>
                <a className="social-item col-md-1" href="https://medium.com/@moumensoliman" target="_blank" rel="noopener noreferrer">
                  <img src={medium} alt="medium logo"/>
                </a>
                <a className="social-item col-md-1" href="https://hackerrank.com/moumensoliman" target="_blank" rel="noopener noreferrer">
                  <img src={hackerRank} alt="hackerrank logo"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
