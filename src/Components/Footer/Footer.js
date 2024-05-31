import React from 'react';
import './Footer.css'
const Footer = () => {
    return(
        <>
        <footer>
        <div className="container footer-div">
          <div className="footer-column ">
            <h4>About Me</h4>
            <img src="/images/WhatsApp Image 2024-05-29 at 3.51.29 PM.jpeg" alt="Your " className=" about-img"/>
            <p className='my-3'>Hi, I'm Lokesh Bhardwaj, a passionate web developer with a love for creating stunning and functional websites.</p>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul >
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
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
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
      </>
    )
}

export default Footer;