import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./GetInTouch.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { HOMEPAGE } from "../../../container/Constants/RoutesConstants";
import Spinner from "../../../container/Loaders/Spinner";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const GetInTouch = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_odbjj25",
        "template_25736vk",
        e.target,
        "Pr1FZ4sKIQQRcubY1"
      )
      .then((res) => {
        setOpen(true);
      })
      .cathc((err) => {
        console.log(err);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      window.location.reload(false);
    }
    setOpen(false);
    window.location.reload(false);
  };
  return (
    <div className="getintouch">
      <div className="title">
        <h4>Get In Touch</h4>
        <p>Feel free to drop us a line to contact us</p>
      </div>
      <div className="container">
        <div
          className="contact"
          data-aos="fade-right"
          data-aos-delay="30"
          data-aos-once="true"
        >
          <div className="heading">
            <h4>Feel Free To Contact</h4>
            <p>Please Locate Us On:</p>
          </div>
          <div className="main">
            <div className="location">
              <i className="fa fa-home"></i>
              <span className="info">Dillibazar-30, Kathmandu, Nepal.</span>
            </div>
            <div className="phone">
              <i className="fa fa-phone"></i>
              <span className="info">
                <a href="tel: +977-1-4423354">+977-1-4423354</a>
              </span>
            </div>
            <div className="email">
              <i className="fa fa-envelope"></i>
              <span className="info">
                <a href="mailto: rightpatheducation@gmail.com">
                  rightpatheducation@gmail.com
                </a>
              </span>
            </div>
            <div className="website">
              <i className="fa fa-globe"></i>
              <span className="info">
                <a
                  href="https://www.rightpath.edu.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.rightpath.edu.np
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="form-container"
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-once="true"
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 3, width: "70%" },
            }}
            noValidate
            className="box"
            autoComplete="off"
            onSubmit={sendEmail}
          >
            <div className="input-fields">
              <TextField
                required
                id="standard-basic"
                label="Name"
                name="name"
                variant="standard"
              />
              <TextField
                required
                id="standard-basic"
                label="Email"
                name="email"
                variant="standard"
              />
              <TextField
                required
                id="filled-multiline-static"
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="filled"
              />
              <Button
                type="submit"
                className="submitButton"
                variant="contained"
              >
                Send
              </Button>
            </div>
          </Box>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Form Submitted Successfully!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
