import React, { useEffect, useState } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import './AboutUs.css'

const AboutUs = () => {
    const [testimonial, setTestimonial] = useState([{
        imgSrc:'//1.bp.blogspot.com/-P1UCUBWGCMU/WaUv1CxF6kI/AAAAAAAADvM/aOSCRX-UHAwKF8EFs20fqryoqDNa3DJQwCK4BGAYYCw/s1600/team_1.jpg',
        title: 'Rojan Dahal AUSTRALIA visa granted.',
        description: 'Date & Details Visa Received: 21st Nov 2019 Difficulties in our life do not come to ruin us,but it helps us to bring our hidden abilities outside. Congratulations Mr Srijan KC for study visa granted to study in Australia.Best Wishes from #KIEC Course Details...',
    }, {
        imgSrc:'//1.bp.blogspot.com/-lS8BCMfild4/WaUv1I0ZzxI/AAAAAAAADvI/TRbkU8DD6qAMXTEciXxlZXakbMGB29xWQCK4BGAYYCw/s1600/team_2.jpg',
        title: 'Saman Shrestha sucess visa granted.',
        description: 'Date & Details Visa Received: 21st Nov 2019 Difficulties in our life do not come to ruin us,but it helps us to bring our hidden abilities outside. Congratulations Mr Srijan KC for study visa granted to study in Australia.Best Wishes from #KIEC Course Details...',
    }])

    const [selectedTestimonial, setSelectedTestimonial] = useState()
    useEffect(() => {
        Aos.init({duration: 1000});
        let count = 0;
        setSelectedTestimonial(testimonial[0])
        count++;
        function cycleArray() {
            setSelectedTestimonial(testimonial[count]);
            count++;
            // reset counter if we reach end of array
            if (count === testimonial.length) {
                 count = 0;
            }
        }
        
        setInterval(cycleArray, 3000);
    }, [])
    return (
        <div className="about-us">
            <div className="heading">
                <h4>AboutUs</h4>
                    <p>Right Path Education is located at the heart of city of Kathmandu, i.e. Dillibazar-33, dedicated to serve in the field of education.
                            Right Path Education Pvt. Ltd. is an educational pathway primarily focused in recruiting students to the different colleges and universities of the world.
                            Our objective is to educate the Nepalese students at international level so that they can turn into gem for Nepal.
                            Hence, we send our student to high rated educational institute to acquire world class education.
                            We do an official collaboration with the universities and colleges across the globe and send our deserving students to their institution to pursue their further studies..
                     </p>    
            </div>   
            <div className="heading">
                    <h4>Testimonial</h4>
                    <p>Our process on creating awesome projects.</p>
                    {selectedTestimonial && (
                        <div className="testimonial" data-aos="zoom-in-up" data-aos-delay="30" data-aos-once="true">
                        <div className="left-side">
                            <img alt="" src={selectedTestimonial?.imgSrc} />
                        </div>
                        <div className="right-side">
                            <div className="title"><h5>{selectedTestimonial?.title}</h5></div>
                            <div className="description">
                                <p>{selectedTestimonial?.description}</p>
                                <span className="readMore">Read More...</span>
                            </div>
                        </div>
                    </div>
                    )}
            </div>      
        </div>
    )
}

export default AboutUs;