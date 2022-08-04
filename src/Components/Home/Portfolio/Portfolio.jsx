import React, {useEffect} from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import './Portfolio.css'

const Portfolio = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
      },[]);
    return (
        <div className="portfolio">
            <div className="container" data-aos="fade-up" data-aos-delay="30" data-aos-once="true">
                <div className="item1">
                    <span className="works-icons">
                    <span className="icon"><i aria-hidden="true" className="fa fa-edit"></i></span>
                    </span>
                    <h6 className="works-heading">Counselling Service</h6>
                    <p className="works-text">It's a preliminary service offered by us</p>
                </div>
                <div className="item2">
                    <span className="works-icons">
                    <span className="icon"><i aria-hidden="true" className="fa fa-clipboard"></i></span>
                    </span>
                    <h6 className="works-heading">Assessing the documents</h6>
                    <p className="works-text">We analyse the documents and provide the best solution  </p>
                </div>
                <div className="item3">
                    <span className="works-icons">
                    <span className="icon"><i aria-hidden="true" className="fa fa-book"></i></span>
                    </span>
                    <h6 className="works-heading">Visa documentation</h6>
                    <p className="works-text">We go through the documents are present them as required by the high commission. </p>
                </div>
            </div>
            <div className="our-portfolio">
                <h4>Our Portfolio.</h4>
                <p>A creative agency that believes in the power of creative ideas and great design.</p>
            </div>
        </div>
    )
}

export default Portfolio;