import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import './Nav.css'


const NavBar = () => {
    const [showMobileNavs, setShowMobileNavs] = useState(false);
    return (
        <div className='navBar'>
            <div className="logo">
                <a href="/">
                <img alt="Right Path Education Pvt. Ltd."src="https://i.ibb.co/vxZQgyy/Logo.png"/>
                </a>
            </div>
            <div className="navigations">
                <ul>
                    <li><Link className="active" to='/'>Home</Link></li>
                    <li><Link to='services'>Services</Link></li>
                    <li><Link to='works'>Works</Link></li>
                    <li><Link to='News'>News</Link></li>
                    <li><Link to='TestimoniLinkl'>Testimonil</Link></li>
                    <li><Link to='Linkbout'>About</Link></li>
                    <li><Link to='ContLinkct'>Contact</Link></li>
                </ul>
            </div>
            <div className="mobile-only">
                <div className="mobile-navigation-icon" onClick={() => setShowMobileNavs(!showMobileNavs)}>
                    <MoreHorizOutlinedIcon />
                </div>  
                <div className={`mobile-navigations ${!showMobileNavs && 'hide'}`}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='services'>Services</Link></li>
                        <li><Link to='works'>Works</Link></li>
                        <li><Link to='News'>News</Link></li>
                        <li><Link to='TestimoniLinkl'>Testimonil</Link></li>
                        <li><Link to='Linkbout'>About</Link></li>
                        <li><Link to='ContLinkct'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;