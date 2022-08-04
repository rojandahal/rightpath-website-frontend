import React, { useEffect, useState } from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Greetings.css'

const Greetings = () => {
    const [featureTextArray, setFeatureTextArray] = useState(['We offer complete consultant service.', 'We are Educational Consultant', 'Hello from RightPath.']);
    const [selectedFeatureText, setSelectedFeatureText] = useState()
    useEffect(() => {
        let count = 0;
        setSelectedFeatureText(featureTextArray[0])
        count++;
        function cycleArray() {
            setSelectedFeatureText(featureTextArray[count]);
            count++;
            // reset counter if we reach end of array
            if (count === featureTextArray.length) {
                 count = 0;
            }
        }
        
        setInterval(cycleArray, 3000);
    }, [])
    return (
        <div className="greetings">
            <h1>Welcome</h1>
            <p>{selectedFeatureText}</p>
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