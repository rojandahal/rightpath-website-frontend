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
      <span>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: "natural",
            strings: [
              "We are Educational Consultant.",
              "We offer complete consultation service.",
              "We assist you with visa documentation.",
            ],
          }}
        />
        </span>
      <div className="social">
        <ul>
          <li>
            <a href='hi'><FacebookOutlinedIcon className="icon"/></a>
          </li>
          <li>
          <a href='hi'><TwitterIcon className="icon"/></a>
          </li>
          <li>
          <a href='hi'><InstagramIcon className="icon"/></a>
          </li>
          <li>
          <a href='hi'><PinterestIcon className="icon"/></a>
          </li>
          <li>
          <a href='hi'><LinkedInIcon className="icon"/></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Greetings;
