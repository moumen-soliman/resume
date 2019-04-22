import React, { Component } from 'react';
import './assets/style/app.scss';
import resume from './resume.json';
import Award from './components/Award';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Volunteer from './components/Volunteer';
import Experience from './components/Experience';
import SocialItems from './components/SocialItems';
import Certificate from './components/Certificate';
import Contributions from './components/Contributions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="app__header">
            <div className="app__header__info">
              <div className="personal-info col-md-8">
                <Header {...resume.personal} />
              </div>
              <div className="social-items col-md-4">
                {
                  resume.social.map(social => <SocialItems key={social.id} {...social} />)
                }
              </div>
            </div>
          </div>
          <div className="app__experience pd-btm">
            <h3 class="head-title let-spc">Employment</h3>
            {
              resume.experience.map(exp => <Experience key={exp.id} {...exp} />)
            }
          </div>
          <div className="app__education pd-btm">
            <h3 class="head-title let-spc">Education</h3>
            {
              <Education {...resume.education} />
            }
          </div>
          <div className="app__experience pd-btm">
            <h3 class="head-title let-spc">Contributions</h3>
            {
              resume.contributions.map(exp => <Contributions key={exp.id} {...exp} />)
            }
          </div>
          <div className="app__projects pd-btm">
            <h3 class="head-title let-spc">Projects & Packages</h3>
            {
              resume.projects.map(proj => <Projects key={proj.id} {...proj} />)
            }
          </div>
          <div className="app__certificate pd-btm">
            <h3 class="head-title let-spc">Certificate</h3>
            {
              resume.certificates.map(certificate => <Certificate key={certificate.id} {...certificate} />)
            }
          </div>
          <div className="app__award pd-btm">
            <h3 class="head-title let-spc">Additional Experience and Awards</h3>
            {
              resume.awards.map(award => <Award key={award.id} {...award} />)
            }
          </div>
          <div className="app__languages pd-btm">
            <h3 class="head-title let-spc">Languages and Technologies</h3>
            <p>{resume.languages}</p>
          </div>
          <div className="app__award pd-btm">
            <h3 class="head-title let-spc">Volunteer Experience & Activites</h3>
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
