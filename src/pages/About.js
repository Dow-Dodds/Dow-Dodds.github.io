import React from 'react'
import {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
//import images
import animal from './../images/animals.JPG';
import make from './../images/make.jpg';
import travel from './../images/travel.jpeg';
import plants from './../images/plants.JPG';


const About = () => {
  return (
    <div id="about">
        <div id="about-container">
            <div id="about-heading">
                <h1>HI THERE,</h1>
                <h3>I'M DOW!</h3>
            </div>
            <div id="about-text-wrapper">
                <p>I’m a UX and Web Designer based in Wellington NZ who loves creating smart user-focused design solutions.</p>
                <p>I come from a customer success background and user research is a key part of my work. Connecting with people to solve real issues has been a passion throughout my career.</p>
                <p>I've worked in New Zealand, America and across the UK.</p>
                <p>I love <b id="plants">plants</b>, <b id="travel">travel</b>, <b id="animals">animals</b> and <b id="make">making things</b> on & offline</p>
            </div>
        </div>
        <div id="dynamic-image">
            
        </div>
        <div id="button-wrapper">
            <div className='button'>
                <Link to="/work">
                    <h5>View Work</h5>
                </Link>
            </div>
            <div className='button'>
                <Link to="/contact">
                    <h5>Contact Me</h5>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About;