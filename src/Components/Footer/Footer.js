import React from 'react';
import './Footer.css'
const Footer = () => {
    return(
        <>
        <footer>
        <div className="container footer-div">
        
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul >
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:bhardwajlokesh946@gmail">bhardwajlokesh946@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024. All rights reserved.</p>
        </div>
      </footer>
      </>
    )
}

export default Footer;