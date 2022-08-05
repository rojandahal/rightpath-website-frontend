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
                        <li>
                            <a href='#'><FacebookOutlinedIcon className="icon"/></a>
                        </li>
                        <li>
                            <a href='#'><TwitterIcon className="icon"/></a>
                        </li>
                        <li>
                            <a href='#'><InstagramIcon className="icon"/></a>
                        </li>
                        <li>
                            <a href='#'><PinterestIcon className="icon"/></a>
                        </li>
                        <li>
                            <a href='#'><LinkedInIcon className="icon"/></a>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Footer;