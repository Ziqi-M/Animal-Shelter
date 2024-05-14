import React from 'react';
import './Footer.css'; // Don't forget to create a corresponding CSS file

const Footer = () => {
  return (
    <footer className="main__footer">
      <div className="footer__content">
        <div className="footer__section">
          <p className="footer__section--title">Contact Us</p>
          <p className="footer__section--text">Email: meng.ziqi@northeastern.edu</p>
          <p className="footer__section--text">Phone: (123) 456-7890</p>
        </div>

        <div className="footer__section">
          <p className="footer__section--title">Subscribe Us</p>
          <p className="footer__section--text">Subscribe Paws & Whiskers Chronicles for updates and events.</p>
          
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2023 San Jose Animal Shelter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;