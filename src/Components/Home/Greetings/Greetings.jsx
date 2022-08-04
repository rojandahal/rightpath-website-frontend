import React, { useEffect, useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "typewriter-effect";
import "./Greetings.css";

const Greetings = () => {

  return (
    <div className="greetings">
      <h1>Welcome </h1>
      <p>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: "natural",
            strings: [
              "Hello from RightPath.",
              "We are Educational Consultant",
              "We offer complete consultant service.",
            ],
          }}
        />
      </p>
      <div className="social">
        <ul>
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <PinterestIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Greetings;
