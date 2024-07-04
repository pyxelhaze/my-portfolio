import React from 'react';
import './Header.css';

const NavBar = ({ openModal }) => {
    return (
        <nav>
            <button className="modalbutton" onClick={() => openModal('about')}>About me</button>
            <button className="modalbutton" onClick={() => openModal('projects')}>Projects</button>
            <button className="modalbutton" onClick={() => openModal('contact')}>Contact</button>
            <button className="gitbutton">
                <a href="https://github.com/pyxelhaze" target="_blank" rel="noreferrer">
                    <img className="logo" src="./github-mark.png" alt="GitHub Logo" />
                </a>
            </button>
        </nav>
    );
};

export default NavBar;

