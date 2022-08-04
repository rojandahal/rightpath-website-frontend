import React from 'react'
import './Footer.css'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return(
        <div className="footer">
            <div className="main"><span>©All Rights Reserved by Right Path  | Distributed by Github
                </span></div>
                <div className="social">
                <ul>
                    <li><FacebookOutlinedIcon/></li>
                    <li><TwitterIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><PinterestIcon /></li>
                    <li><LinkedInIcon /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;