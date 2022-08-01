import React from 'react'

import './Workings.css'

const WorkingProcess = () => {
    return (
        <div className="working-process">
            <div className="works-title">
                <h4>Our Working Process</h4>
                <p>Our process on making successful visa decisions.</p>
            </div>
            <div className="processes">
                <div className="item1">
                    <span className="works-icons">
                    <span className="icon"><i aria-hidden="true" className="fa fa-lightbulb-o"></i></span>
                    </span>
                    <h6 className="works-heading">1. Career Counseling</h6>
                    <p className="works-text">We make the process easy by explaining it to our clients</p>
                </div>
                <div>
                    <span className="works-icons">
                    <span className="icon"><i aria-hidden="true" className="fa fa-clipboard"></i></span>
                    </span>
                    <h6 className="works-heading">2. Assessing the documents</h6>
                    <p className="works-text">We analyse the documents and provide the best solution  </p>
                </div>
                <div>
                    <span className="works-icons">
                    <span className="icon"><i aria-hidden="true" className="fa fa-book"></i></span>
                    </span>
                    <h6 className="works-heading">3. Visa documentation</h6>
                    <p className="works-text">We go through the documents are present them as required by the high commission. </p>
                </div>
                <div>
                    <span className="works-icons">
                    <span className="icon"><i aria-hidden="true" className="fa fa-handshake"></i></span>
                    </span>
                    <h6 className="works-heading">1. Visa application assistance</h6>
                    <p className="works-text">Finally, we help our client to apply the visa </p>
                </div>
            </div>
        </div>
    )
}

export default WorkingProcess;