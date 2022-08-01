import React from 'react';
import './Home.css'
import NavBar from '../Components/Home/Navs/Nav';
import Greetings from '../Components/Home/Greetings/Greetings';
import WorkingProcess from '../Components/Home/Workings/Workings';
import Portfolio from '../Components/Home/Portfolio/Portfolio';

const Home = () => {
    return (
        <div className='home'>
          <div className="header-wrapper">
            <NavBar />
            <Greetings />
          </div>
          <div className="blank-line"></div>
          <div className="middle-wrapper">
            <WorkingProcess />
            <Portfolio />
          </div>
        </div>
    );
};

export default Home;