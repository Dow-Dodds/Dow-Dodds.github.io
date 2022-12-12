
import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import { useSpring, animated } from 'react-spring';
import loadingFlower from "./../images/bigblueflower.png"


//import components 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

// import pages
import Home from './../pages/Home'
import Work from '../pages/Work';
import ProjectPage from '../pages/ProjectPage';
import Contact from '../pages/Contact';
import About from '../pages/About';
//import our styles 
import '../css/styles.css';

const App = () => {
    return (
        <>
        <BrowserRouter>
         <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:id" element={<ProjectPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
         <Footer />
        </BrowserRouter>
        </>
    )
}

export default App;