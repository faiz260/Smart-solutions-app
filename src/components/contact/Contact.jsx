import React from "react";
import "./Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Typography, Link } from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../../assets/27620-contact-us.json";
import LowerFooter from "../footer/lower_footer";

function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="contact">
        <div className="div1">
          {" "}
          <div>
            <div className="div2_1">
              <PhoneIcon className="contact-icon" fontSize="large" />
              <Typography variant="h6">Phone Number</Typography>
              <Typography variant="body1">0321 2326812</Typography>
            </div>
            <div className="div2_1">
              <FacebookIcon className="contact-icon" fontSize="large" />
              <Typography variant="h6">Facebook</Typography>
              <Link
                target="_blank"
                href="https://www.facebook.com/smartsolutionsunofficial/"
                className="contact_link"
              >
                <Typography variant="body1">Smart Solutions</Typography>
              </Link>
            </div>
          </div>
          <div>
            <div className="div2_1">
              <EmailIcon className="contact-icon" fontSize="large" />
              <Typography variant="h6">Email Address</Typography>
              <Typography variant="body1" className="email_typo">
                smartsolutionsunofficial@gmail.com
              </Typography>
            </div>
            <div className="div2_1">
              <InstagramIcon className="contact-icon" fontSize="large" />
              <Typography variant="h6">Instagram</Typography>
              <Link
                target="_blank"
                href="https://www.instagram.com/smartsolutionsunofficial/"
                className="contact_link"
              >
                <Typography variant="body1">Smart Solutions</Typography>
              </Link>
            </div>
          </div>
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
