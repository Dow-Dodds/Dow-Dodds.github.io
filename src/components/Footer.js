import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Instagram, Github  } from 'react-bootstrap-icons';

//animations 
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

//import images 



const Footer = () => {
  return (
    <>
    <ScrollAnimation animateIn="slideInUp">
      <div id="footer">
          <div id="foot-cta-wrapper">
              <h3>PLEASE HIRE ME!</h3>
              <button>CONTACT ME <ArrowRight /></button>
          </div>
          
          <div id="footer-links">
              <h5>ABOUT</h5>
              <h5>WORK</h5>
              <h5>CONTACT</h5>
          </div>

          <div id="footer-socials">
              <a target="_blank" href="https://github.com/Dow-Dodds">< Github /></a>
              <a target="_blank" href="https://www.linkedin.com/in/dowdodds/">< Linkedin /></a>
              <a target="_blank" href="https://www.instagram.com/dowdodds/?hl=en"><Instagram /></a>

          </div>
      </div>
      </ScrollAnimation>
    </>
  )
}

export default Footer
