import { useState } from 'react';
import { Link } from 'react-router-dom';
import navIcon from "./../images/menu.png"
import { ThreeDotsVertical } from 'react-bootstrap-icons';
//import components 
import MobileMenu from './MobileMenu';
//import images 
import whitestar from "./../images/white-star.png"

const Navbar = () => {

    const [MenuIsOpen, openMenu] = useState(false);

    const toggleMobileMenu = () => {
        // Exclamation mark inverts a boolean value
        openMenu(!MenuIsOpen)
    }
  
    return (
        <>
        <div id="navbar"> 
          
        
            <div id="nav-icon" alt="nav-icon" onClick={toggleMobileMenu} >
                < ThreeDotsVertical/>
                <img src={whitestar} alt="white-star" id="white-star" className='rotate'></img>
            </div>    

            <div id="desktop-menu">
                <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>

                    <Link to="/about">
                        <li>ABOUT</li>
                    </Link>

                    <Link to="/work">
                        <li>WORK</li>
                    </Link>

                    <Link to="/contact">
                        <li id="cta">CONTACT</li>
                    </Link>
                </ul>
            </div>

            
        </div>
        {MenuIsOpen && < MobileMenu closeMethod={toggleMobileMenu} />}
        </>
    )

}

export default Navbar;