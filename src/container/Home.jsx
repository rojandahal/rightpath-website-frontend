import React from 'react';
import './Home.css'
import NavBar from '../Components/Home/Navs/Nav';
import Greetings from '../Components/Home/Greetings/Greetings';
import WorkingProcess from '../Components/Home/Workings/Workings';

const Home = () => {
    return (
        <div className='home'>
          <div className="header-wrapper">
            <NavBar />
            <Greetings />
          </div>
          <div className="blank-line"></div>
          <WorkingProcess />
        </div>
    );
};

export default Home;