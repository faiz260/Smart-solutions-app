import React from "react";
import "./footer.css";
import { Link, Paper, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Lottie from "react-lottie";
import animationData from "../../assets/27620-contact-us.json";

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
    <div className="footer">
      <Paper elevation={3} className="footer_paper">
        <div className="div_1">
          <div className="footer_right">
            <Typography variant="h2" component="h2" className="typo">
              Contact Us
            </Typography>
            <Typography variant="h6" component="h6">
              <PhoneIcon className="icon" />
              <span className="contact_details">0321 2326812</span>
            </Typography>
            <Typography variant="h6" component="h6">
              <EmailIcon className="icon" />{" "}
              <span className="contact_details">
                smartsolutionsunofficial@gmail.com
              </span>
            </Typography>
          </div>
          <div className="footer_mid">
            <Typography variant="h6" component="h6">
              <Link
                target="_blank"
                href="https://www.facebook.com/smartsolutionsunofficial/"
              >
                {" "}
                <FacebookIcon className="icon" fontSize="large" />
              </Link>
              <span className="contact_details">
                {" "}
                /smartsolutionsunofficial{" "}
              </span>
            </Typography>
            <Typography variant="h6" component="h6">
              <Link target="_blank" href="https://www.youtube.com">
                <YouTubeIcon className="icon" fontSize="large" />
              </Link>
              <span className="contact_details"> email@gmail.com </span>
            </Typography>
            <Typography variant="h6" component="h6">
              <Link
                target="_blank"
                href="https://www.instagram.com/smartsolutionsunofficial/"
              >
                <InstagramIcon className="icon" fontSize="large" />
              </Link>
              <span className="contact_details">
                {" "}
                /smartsolutionsunofficial{" "}
              </span>
            </Typography>
          </div>
        </div>
        <div className="footer_left">
          <Lottie options={defaultOptions} />
        </div>
      </Paper>
    </div>
  );
}

export default footer;
