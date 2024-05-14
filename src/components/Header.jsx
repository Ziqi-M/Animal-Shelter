import React, { useState } from 'react';
import logoImage from '../images/logo.png'; 
import './Header.css';


const Header = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`main__header ${menuOpen ? 'menu__open' : ''}`}>
      <div className='header__content'>
        <a href='#' className="logo__title" onClick={() => setPage('home')}>
          <img src={logoImage} alt="san-jose-animal-shelter-logo" className="logo__image" />
          <h2 className="logo__title--title">San Jose Animal Shelter</h2>
        </a>
        <nav className={`nav__menu ${menuOpen ? 'open' : ''}`}>
        <a href='#' className='header__button' onClick={() => setPage('home')}>Home</a>
          <a href='#' className='header__button' onClick={() => setPage('adopt-pets')}>Adopt Pets</a>
          <a href='#' className='header__button' onClick={() => setPage('adoption-process')}>Adoption Process</a>
          <a href='#' className='header__button' onClick={() => setPage('about-us')}>About Us</a>
          <a href='#' className='header__button' onClick={() => setPage('volunteer')}>Volunteer</a>
        </nav>
        <div className="hamburger__menu" onClick={toggleMenu}>
          <div className="hamburger__menu--bar"></div>
          <div className="hamburger__menu--bar"></div>
          <div className="hamburger__menu--bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;