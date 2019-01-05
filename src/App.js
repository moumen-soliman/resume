import React, { Component } from 'react';
import './assets/style/app.scss';
import resume from './resume.json';
import Header from './components/Header';
import SocialItems from './components/SocialItems';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Award from './components/Award';
import Volunteer from './components/Volunteer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="app__header">
            <div className="app__header__info">
              <div className="personal-info col-md-6">
                  <Header {...resume.personal} />
              </div>
              <div className="social-items col-md-6">
                {
                  resume.social.map(social => <SocialItems key={social.id} {...social} />)
                }
              </div>
            </div>
          </div>
          <div className="app__experience pd-btm">
            <h3 class="head-title">Employment</h3>
            {
              resume.experience.map(exp => <Experience key={exp.id} {...exp} />)
            }
          </div>
          <div className="app__education pd-btm">
            <h3 class="head-title">Education</h3>
            {
              <Education {...resume.education} />
            }
          </div>
          <div className="app__projects pd-btm">
            <h3 class="head-title">Projects & Packages</h3>
            {
              resume.projects.map(proj => <Projects key={proj.id} {...proj} />)
            }
          </div>
          <div className="app__certificate pd-btm">
            <h3 class="head-title">Certificate</h3>
            {
              resume.certificates.map(certificate => <Certificate key={certificate.id} {...certificate} />)
            }
          </div>
          <div className="app__award pd-btm">
            <h3 class="head-title">Additional Experience and Awards</h3>
            {
              resume.awards.map(award => <Award key={award.id} {...award} />)
            }
          </div>
          <div className="app__languages pd-btm">
            <h3 class="head-title">Languages and Technologies</h3>
            <p>{resume.languages}</p>
          </div>
          <div className="app__award pd-btm">
            <h3 class="head-title">Volunteer Experience & Activites</h3>
            {
              resume.volunteering.map(vol => <Volunteer key={vol.id} {...vol} />)
            }            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
