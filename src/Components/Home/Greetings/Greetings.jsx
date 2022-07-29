import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Greetings.css'

const Greetings = () => {
    return (
        <div className="greetings">
            <h1>Welcome</h1>
            <p>We are Educational Consultant</p>
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

export default Greetings;