import React, { useEffect, useState } from "react";
import Aos from "aos";
import Button from "@mui/material/Button";
import "aos/dist/aos.css";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [testimonial, setTestimonial] = useState([
    {
      imgSrc:
        "https://res.cloudinary.com/dpdaewdwd/image/upload/v1659627889/296143886_1937735936421287_6985839790890874485_n_cdqd79.jpg",
      title: "Dhiraj Raj Khanal",
      description:
        "I find Right Path Education one of the nicest educational consultancies in the city. From the beginning they have cleared my confusion regarding the language, country, course etc. I strongly recommend students who are willing to study abroad go through the Right Path Education. They provide the best guidance....",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dpdaewdwd/image/upload/v1659628328/16864640_1558774204150057_8612783851980932768_n_ixwphk.jpg",
      title: "Archana Dekota",
      description:
        "The thing I like most about the this is, the counsellors and visa officer are really well behaved. They have provided me so much resources and understanding to help me write my sop. Indeed, SOP is the most important factor than any other because its not you it’s the statement that is doing all the talking to the High Commission, it ought to be well  written. Where the documentation officer helped me the most to get it sorted....",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dpdaewdwd/image/upload/v1659628242/29872175_1678439695578897_4895637692289820097_o_fhy5he.jpg",
      title: "Rozan Dahal",
      description:
        "It is because of the Right Path Education that I am studying my dream course i.e. Masters of Professional Accounting. All thanks to the team Right Path for properly managing my entire course of journey till Australia. I really happy with the supported provided by them.",
    },
  ]);

  const [selectedTestimonial, setSelectedTestimonial] = useState();
  let count = 0;
  useEffect(() => {
    Aos.init({ duration: 1000 });
    let count = 0;
    setSelectedTestimonial(testimonial[0]);
    count++;
    function cycleArray() {
      setSelectedTestimonial(testimonial[count]);
      count++;
      // reset counter if we reach end of array
      if (count === testimonial.length) {
        count = 0;
      }
    }
    setInterval(cycleArray, 6000);
  }, []);

  return (
    <div className="about-us">
      <div className="heading">
        <h4>AboutUs</h4>
        <p>
          Right Path Education is located at the heart of city of Kathmandu,
          i.e. Dillibazar-33, dedicated to serve in the field of education.
          <br></br>
          Right Path Education Pvt. Ltd. is an educational pathway primarily
          focused in recruiting students to the different colleges and
          universities of the world.<br></br> Our objective is to educate the
          Nepalese students at international level so that they can turn into
          gem for Nepal.<br></br> Hence, we send our student to high rated
          educational institute to acquire world class education.<br></br> We do
          an official collaboration with the universities and colleges across
          the globe and send our deserving students to their institution to
          pursue their further studies..
        </p>
      </div>
      <div className="heading">
        <h4>Testimonial</h4>
        <p>Something from our students</p>
        {selectedTestimonial && (
          <div
            className="testimonial"
            data-aos="zoom-in-up"
            data-aos-delay="30"
            data-aos-once="true"
          >
            <div className="left-side">
              <img alt="" src={selectedTestimonial?.imgSrc} />
            </div>
            <div className="right-side">
              <div className="title">
                <h4>{selectedTestimonial?.title}</h4>
              </div>
              <div className="description">
                <p>{selectedTestimonial?.description}</p>
                <span className="readMore"></span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="appointment"
        data-aos="zoom-in-up"
        data-aos-delay="30"
        data-aos-once="true"
      >
        <div className="appointment-title">
          <h3>Do you want to Study Abroad ?</h3>
          <p>Apply for a free appointment now. We will guide you. </p>
        </div>
        <Link to="/apply-form" className="appoint-button" >
        <Button sx={{ borderRadius: 25 }} variant="contained" color="primary">
          BOOK AN APPOINTMENT
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
