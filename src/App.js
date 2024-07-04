import React, { useState } from 'react';
import './App.css';
import './fonts.css'
import Header from './components/Header/Header';
/* import Footer from './components/Footer'; */
/* import Main from './components/Main'; */
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
        <div className="header"><Header /></div>
        <div className="navbar"><NavBar openModal={openModal} /></div>
      </div>
      {/* <Main /> */}
      {/* <Footer /> */}

      {/* Modals */}
      {modals.about && (
        <Modal id="modal-about" closeModal={() => closeModal('about')} active={true}>
          <div class="modal-header">
            <div class="title">About me</div>
            <button className="close-button" onClick={() => closeModal('about')}>
              &times;</button>
          </div>
          <div class="modal-body">
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
          {/* Inhalt für das "Projects" Modal */}
          <p>
            Information about projects...
          </p>
        </Modal>
      )}

      {modals.contact && (
        <Modal id="modal-contact" closeModal={() => closeModal('contact')} active={true}>
          {/* Inhalt für das "Contact" Modal */}
          <p>
            Contact information...
          </p>
        </Modal>
      )}
    </div>
  );
}


/* function App() {
  return (
    <div className="App">
      <div className="head">
        <div className="header"><Header /></div>
        <div className="navbar"><NavBar /></div>
      </div>
      <Profile />
      <Footer />
    </div>
  );
} */

export default App;
