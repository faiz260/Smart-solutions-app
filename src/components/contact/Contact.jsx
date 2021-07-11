import React, { useState } from "react";
import "./Contact.css";
import { Typography, Link, Collapse, IconButton } from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../../assets/27620-contact-us.json";
import LowerFooter from "../footer/lower_footer";
import emailjs from "emailjs-com";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";

function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [emailSent, setemailSent] = useState(false);
  const [open, setOpen] = useState(true);

  console.log("Email sent 1 ", emailSent);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qck3gm5",
        "template_z5c9taf",
        e.target,
        "user_ZTsIEcjHAQLJAFuFMbRfN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setemailSent(true);
          console.log("Email Sent ", emailSent);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <div className="contact">
        <div className="contact_form">
          {emailSent ? (
            <Collapse in={open}>
              <Alert
                className="alert"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Message Sent!
              </Alert>
            </Collapse>
          ) : (
            false
          )}
          <form onSubmit={sendEmail} className="form">
            <input
              type="text"
              placeholder="Your Name *"
              name="name"
              className="input"
              required={true}
            />
            <input
              type="email"
              placeholder="Your Email *"
              name="email"
              className="input"
              required={true}
            />
            <input
              type="text"
              placeholder="Your contact No. *"
              name="contact"
              className="input"
              required={true}
            />
            <input
              type="text"
              placeholder="Write a Subject*"
              name="subject"
              className="input"
              required={true}
            />
            <textarea
              type="text"
              placeholder="Which service/product do you want? *"
              name="message"
              className="input"
              required={true}
            />
            <input
              type="submit"
              className="input_btn"
              value="Send Message"
            ></input>
          </form>
        </div>

        <div className="div2">
          <div className="contact_us">
            <Typography variant="h5" className="cu_typo">
              Contact Us
            </Typography>
          </div>
          <div className="contact_us_lottie">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>

      <LowerFooter />
    </div>
  );
}

export default Contact;
