import React, { useEffect, useState } from 'react';
import './Home.css'
import NavBar from '../Components/Home/Navs/Nav';
import Greetings from '../Components/Home/Greetings/Greetings';
import WorkingProcess from '../Components/Home/Workings/Workings';
import Portfolio from '../Components/Home/Portfolio/Portfolio';
import AboutUs from '../Components/Home/Aboutus/AboutUs';
import GetInTouch from '../Components/Home/GetInTouch/GetInTouch';
import Footer from '../Components/Home/Footer/Footer';


const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <div className='home'>
          {scrollPosition > 60 && <NavBar scrollPosition={scrollPosition}/>}
          <div className="header-wrapper">
            <NavBar/>
            <Greetings />
          </div>
          <div className="blank-line"></div>
          <div className="middle-wrapper">
            <WorkingProcess />
            <Portfolio />
            <AboutUs />
            <GetInTouch />
            <Footer />
          </div>
        </div>
    );
};

export default Home;