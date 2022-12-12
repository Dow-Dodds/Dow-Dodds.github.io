import React from 'react'
import { XCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

//import images
import closeIcon from "./../images/CrosscloseBtn.png";

const MobileMenu = ({closeMethod}) => {
  return (
    <>
    <div id="mobile-menu">
        <div id="close-nav">
        <img src={closeIcon} alt="close nav" onClick={closeMethod}></img>
        </div>

        <div id="mobile-links">
            <ul>
                <Link to="/">
                    <li onClick={closeMethod}>
                        <h3>HOME</h3>
                    </li>
                </Link>

                <Link to="about">
                    <li onClick={closeMethod}>
                        <h3>ABOUT</h3>
                    </li>
                </Link>
                
                <Link to="/work">
                    <li onClick={closeMethod}>
                        <h3>WORK</h3>
                    </li>
                </Link>

                <Link to="/contact">
                    <li onClick={closeMethod}>
                        <h3>CONTACT</h3>
                    </li>
                </Link>
            </ul>
        </div>

    </div>

    </>
  )
}

export default MobileMenu