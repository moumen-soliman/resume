import React, { Component } from 'react';
import './assets/style/app.scss';
import resume from './resume.json';
import Header from './components/Header';
import SocialItems from './components/SocialItems';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="app__header">
            <div className="app__header__info">
              <div className="col-md-12">
                  <Header {...resume.personal} />
              </div>
              <div className="social-items col-md-12">
                {
                  resume.social.map(social => <SocialItems key={social.id} {...social} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
