import React, { useState } from 'react';
import './App.css';
import './fonts.css';
import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar';
import Modal from './components/Modal';

const App = () => {
  const [modals, setModals] = useState({
    about: false,
    projects: false,
    contact: false,
  });

  const openModal = (modalName) => {
    setModals({ ...modals, [modalName]: true });
  };

  const closeModal = (modalName) => {
    setModals({ ...modals, [modalName]: false });
  };

  return (
    <div className="app">
      <div className="head">
        <div className="header">
          <Header />
        </div>
        <div className="navbar">
          <NavBar openModal={openModal} />
        </div>
      </div>

      {/* Modals */}
      {modals.about && (
        <Modal id="modal-about" closeModal={() => closeModal('about')} active={true}>
          <div className="modal-header">
            <div className="title">About me</div>
            <button className="close-button" onClick={() => closeModal('about')}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            Hi, <br /><br />
            I am Thomas, a late-blooming web/software developer. This is already
            my third career. I started in the trades, and then switched to
            biotechnology, where I worked as a Biological Technical Assistant in
            molecular biology research. However, the opportunities for
            advancement in that field were quite limited, and my hunger to learn
            was not satisfied. <br /><br />
            I've been interested in coding for a while, and I am thrilled to
            have taken the leap for a fresh start. Initially, I began
            self-studying, but it quickly became clear to me that I wanted to
            learn it properly. So, I decided to undergo training with GFN GmbH
            to become a certified software developer (JavaScript). I have
            successfully completed the course and have been able to establish a
            strong foundation for the future. <br /><br />This website serves as
            a portfolio to showcase where my skills lie, and I will continuously
            update it as I make progress. <br /><br />
            Best regards,<br />
            Thomas
          </div>
        </Modal>
      )}

      {modals.projects && (
        <Modal id="modal-projects" closeModal={() => closeModal('projects')} active={true}>
          <div className="modal-header">
            <div className="title">Projects</div>
            <button className="close-button" onClick={() => closeModal('projects')}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            All projects have been developed without the use of any frameworks
            at their current state. While I do have some initial knowledge in
            Bootstrap and React, I aim to improve my proficiency in vanilla
            languages before incorporating frameworks. <br /><br />
            A brief overview of the showcased projects: Watergardens is
            somewhat of a tribute to my past aquascapes, colors is a small
            minigame, Solarsystem accesses an external API, and the Animal
            Shelter is just pure and simple HTML&CSS.
            <div className="projects">
              <div className="project1">
                <div className="project-overlay">
                  <a
                    href="https://pyxelhaze.com/holidayresort"
                    className="project-overlay-text overlay-link"
                  >
                    Aqua Vista
                  </a>
                </div>
              </div>
              <div className="project4">
                <div className="project-overlay">
                  <a
                    href="https://pyxelhaze.com/colors"
                    className="project-overlay-text colors overlay-link"
                  >
                    <p className="c">c</p>
                    <p className="o">o</p>
                    <p className="l">l</p>
                    <p className="o">o</p>
                    <p className="r">r</p>
                    <p className="s">s</p>
                  </a>
                </div>
              </div>
              <div className="project3">
                <div className="project-overlay">
                  <a
                    href="https://pyxelhaze.com/solarsystem"
                    className="project-overlay-text overlay-link"
                  >
                    Solarsystem
                  </a>
                </div>
              </div>
              <div className="project2">
                <div className="project-overlay">
                  <a
                    href="https://pyxelhaze.com/watergardens"
                    className="project-overlay-text overlay-link"
                  >
                    Watergardens
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {modals.contact && (
        <Modal id="modal-contact" closeModal={() => closeModal('contact')} active={true}>
          <div className="modal-header">
            <div className="title">Contact</div>
            <button className="close-button" onClick={() => closeModal('contact')}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="messagebox">
              <div className="email">
                Send me an email
                <br /><br />
                <a
                  className="two"
                  href="mailto:thomas@pyxelhaze.com?subject=Hi&amp;body=Hey Thomas,"
                  target="_blank" rel="noreferrer"
                >
                  thomas@pyxelhaze.com
                </a>
                <br /><br />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
