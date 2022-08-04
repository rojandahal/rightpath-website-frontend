import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import "./Workings.css";

const WorkingProcess = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  },[]);

  return (
    <div className="working-process" data-aos="fade-up" data-aos-delay="30" data-aos-once="true">
      <div className="works-title">
        <h4>Our Working Process</h4>
        <p>Our process on making successful visa decisions.</p>
      </div>
      <div className="processes">
        <div className="item1" data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
          <span className="works-icons">
            <span className="icon">
              <i aria-hidden="true" className="fa fa-lightbulb-o"></i>
            </span>
          </span>
          <h6 className="works-heading">1. Career Counseling</h6>
          <p className="works-text">
            We make the process easy by explaining it to our clients
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
          <span className="works-icons">
            <span className="icon">
              <i aria-hidden="true" className="fa fa-clipboard"></i>
            </span>
          </span>
          <h6 className="works-heading">2. Assessing the documents</h6>
          <p className="works-text">
            We analyse the documents and provide the best solution{" "}
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
          <span className="works-icons">
            <span className="icon">
              <i aria-hidden="true" className="fa fa-book"></i>
            </span>
          </span>
          <h6 className="works-heading">3. Visa documentation</h6>
          <p className="works-text">
          We go through the documents are present them as required by the high commission and embassy{" "}
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
          <span className="works-icons">
            <span className="icon">
              <i aria-hidden="true" className="fa fa-handshake"></i>
            </span>
          </span>
          <h6 className="works-heading">4. Visa application assistance</h6>
          <p className="works-text">
            Finally, we help our client to apply the visa{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
