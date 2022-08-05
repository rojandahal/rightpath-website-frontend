import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import './Nav.css'
import { scroller } from "react-scroll";


const NavBar = ({scrollPosition}) => {
    const [showMobileNavs, setShowMobileNavs] = useState(false);
    const scrollToSection = (className) => {
        scroller.scrollTo(className, {
          duration: 200,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };
    return (
        <div className={`navBar ${scrollPosition > 60 && 'sticky'}`}>
            <div className="logo">
                <a href="/">
                <img alt="Right Path Education Pvt. Ltd."src="https://i.ibb.co/vxZQgyy/Logo.png"/>
                </a>
            </div>
            <div className="navigations">
                <ul>
                    <li><Link className={`${(scrollPosition < 600 || scrollPosition === undefined) && 'active'}`} to='/' onClick={() => scrollToSection('app')}>Home</Link></li>
                    <li><Link to='#' className={`${scrollPosition >= 600 && scrollPosition < 1035 && 'active'}`} onClick={() => scrollToSection('working-process')}>Services</Link></li>
                    <li><Link to='#' className={`${scrollPosition >= 1035 && scrollPosition < 1660 && 'active'}`} onClick={() => scrollToSection('portfolio')}>Works</Link></li>
                    <li><Link to='#' className={`${scrollPosition >= 1660 && scrollPosition < 2130 && 'active'}`} onClick={() => scrollToSection('about-us')}>About</Link></li>
                    <li><Link to='#' className={`${scrollPosition >= 2130 && scrollPosition < 2600 && 'active'}`}  onClick={() => scrollToSection('testimonial')}>Testimonial</Link></li>
                    <li><Link to='apply-form' className={`${scrollPosition > 2600 && 'active'}`}>Contact</Link></li>
                </ul>
            </div>
            <div className="mobile-only">
                <div className="mobile-navigation-icon" onClick={() => setShowMobileNavs(!showMobileNavs)}>
                    <MoreHorizOutlinedIcon />
                </div>  
                <div className={`mobile-navigations ${!showMobileNavs && 'hide'}`}>
                <ul>
                    <li><Link className={`${(scrollPosition < 600 || scrollPosition === undefined) && 'active'}`} to='#' onClick={() => scrollToSection('app')}>Home</Link></li>
                    <li><Link to='#' className={`${scrollPosition >= 600 && scrollPosition < 1035 && 'active'}`} onClick={() => scrollToSection('working-process')}>Services</Link></li>
                    <li><Link to='#' className={`${scrollPosition >= 1035 && scrollPosition < 1660 && 'active'}`} onClick={() => scrollToSection('portfolio')}>Works</Link></li>
                    <li><Link to='#' className={`${scrollPosition >= 1660 && scrollPosition < 2130 && 'active'}`} onClick={() => scrollToSection('about-us')}>About</Link></li>
                    <li><Link to='#' className={`${scrollPosition >= 2130 && scrollPosition < 2600 && 'active'}`}  onClick={() => scrollToSection('testimonial')}>Testimonial</Link></li>
                    <li><Link to='apply-form' className={`${scrollPosition > 2600 && 'active'}`}>Contact</Link></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;