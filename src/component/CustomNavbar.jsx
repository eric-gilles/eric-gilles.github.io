import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

// Translations
const translations = {
  en: {
    about: 'About Me',
    projects: 'Projects',
    techstacks: 'Tech Stacks',
    contact: 'Contact',
    home: 'Home',
    allProjects: 'All Projects',
    welcome: 'Welcome to my portfolio',
  },
  fr: {
    about: 'À propos de moi',
    projects: 'Projets',
    techstacks: 'Technologies',
    contact: 'Contact',
    home: 'Accueil',
    allProjects: 'Tous les projets',
    welcome: 'Bienvenue sur mon portfolio',
  },
};

// StyledSwitch style
const StyledSwitch = styled.label`
  /* Wrapper */
  position: relative;
  display: inline-block;
  text-align: left;
  opacity: 1;
  direction: ltr;
  border-radius: 20px;
  transition: opacity 0.25s ease 0s;
  touch-action: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;

  /* Background */
  .react-switch-bg {
    height: 30px;
    width: 60px;
    margin: 0px;
    position: relative;
    background: rgb(186, 170, 128);
    border-radius: 15px;
    cursor: pointer;
    transition: background 0.25s ease 0s;
  }

  /* Handle */
  .react-switch-handle {
    height: 26px;
    width: 26px;
    background: rgb(255, 255, 255);
    display: inline-block;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    outline: 0px;
    border: 0px;
    transition: background-color 0.25s ease 0s, transform 0.85s ease 0s, box-shadow 0.15s ease 0s;
    left: ${({ isChecked }) => (isChecked ? '30px' : '2px')};
  }

  /* Checkbox */
  input[type="checkbox"] {
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    width: 1px;
  }

  /* Flags */
  .flag {
    width: 20px;
    height: auto;
    position: absolute;
    top: 3px;
    left: ${({ isChecked }) => (isChecked ? '5px' : '34px')};
    transition: left 0.3s ease;
  }
`;


function CustomNavbar({ currentPage }) {
  const [expanded, setExpanded] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const translate = key => translations[language][key];

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {currentPage === 'home' && (
              <>
                <Nav.Link href="#about">{translate('about')}</Nav.Link>
                <Nav.Link href="#projects">{translate('projects')}</Nav.Link>
                <Nav.Link href="#techstacks">{translate('techstacks')}</Nav.Link>
                <Nav.Link href="#contact">{translate('contact')}</Nav.Link>
              </>
            )}
            {currentPage === 'project' && (
              <>
                <Nav.Link href="/">{translate('home')}</Nav.Link>
                <Nav.Link href="/projects">{translate('allProjects')}</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <StyledSwitch isChecked={language === 'fr'}>
            <div className="react-switch-bg">
              <div className="react-switch-handle"></div>
              <input type="checkbox" onClick={toggleLanguage} />
            </div>
            <span className="flag">
              {language === 'en' ? (
                <span className="fi fi-gb"></span>
              ) : (
                <span className="fi fi-fr"></span>
              )}
            </span>
          </StyledSwitch>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
