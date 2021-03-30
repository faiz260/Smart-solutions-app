import React from "react";
import "./footer.css";
import { Paper, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Lottie from "react-lottie";
import animationData from "../../../assets/27620-contact-us.json";

function footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Paper elevation={3} className="footer_paper">
      <div className="div_1">
        <div className="footer_right">
          <Typography variant="h2" component="h2" className="typo">
            Contact Us
          </Typography>
          <Typography variant="h6" component="h6">
            <PhoneIcon className="icon" />
            03462734212
          </Typography>
          <Typography variant="h6" component="h6">
            <EmailIcon className="icon" />
            email@gmail.com
          </Typography>
        </div>
        <div className="footer_mid">
          <Typography variant="h6" component="h6">
            <FacebookIcon className="icon" fontSize="large" />
            email@gmail.com
          </Typography>
          <Typography variant="h6" component="h6">
            <YouTubeIcon className="icon" fontSize="large" />
            email@gmail.com
          </Typography>
          <Typography variant="h6" component="h6">
            <InstagramIcon className="icon" fontSize="large" />
            email@gmail.com
          </Typography>
        </div>
      </div>
      <div className="footer_left">
        <Lottie options={defaultOptions} />
      </div>
    </Paper>
  );
}

export default footer;