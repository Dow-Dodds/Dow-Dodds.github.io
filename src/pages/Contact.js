import React from 'react'
import {Github, Linkedin, Instagram, Asterisk } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
//import components 
import ContactForm from "../components/ContactForm";
//import images 
import bluestar from "./../images/blue8star.png"
import animal from './../images/animals.JPG';



const Contact = () => {
  return (
    <div id="contact">
        <div className='bar'>
          <div className='bar-content marquee'>
            <span>
              <p>Currently Freelancing - Available for Projects</p>
            </span>
            <span>
              <Asterisk/>
            </span>
          
            <span>
              <p>Obsessively knitting or playing Kirby</p> 
            </span>
            <span>
              <Asterisk/>
            </span>

            <span>
              <p>Find me at Swimsuit drinking my fourth coffee</p>              
            </span>
            <span>
              <Asterisk/>
            </span>
          </div>

          <div className='bar-content marquee marquee2'>
            <span>
              <p>Find me at Swimsuit drinking my fourth coffee</p>        
            </span>
            <span>
              <Asterisk/>
            </span>
          
            <span>
              <p>Currently Freelancing - Available for Projects</p>
       
            </span>
            <span>
              <Asterisk/>
            </span>
          
            <span>
              <p>Obsessively knitting or playing Kirby</p>        
            </span>
            <span>
              <Asterisk/>
            </span>
          
          </div>
        </div>
        <div id="main-contact-section">
          <div id="contact-hero">
            <div id="contact-text-wrapper">
              <h1>Hey There,</h1>
              <h1>Let’s Chat!</h1>
              <p>I would love to hear from you</p>
            </div>
            <div id="contact-image">
                <img src={animal}/>
            </div>
          </div>
          <ContactForm />
        </div>
        <div id="socials-wrapper">
          <h3>Check me out!</h3>
          <div className='socials'>
            <a href="https://github.com/Dow-Dodds" target={"_blank"}><Github/></a>
          </div>
          <div className='socials'>
            <a href="https://www.linkedin.com/in/dowdodds/" target={"_blank"}><Linkedin/></a>
          </div>
          <div className='socials'>
            <a href="https://www.instagram.com/dowdodds/?hl=en" target={"_blank"}><Instagram/></a>
          </div>
          
        </div>

    </div>
    
  )
}

export default Contact