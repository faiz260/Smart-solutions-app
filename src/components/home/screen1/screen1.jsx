import React from "react";
import "./screen1.css";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

function screen1() {
  return (
    <div className="div">
      <div className="inner-div">
        <div className="text-div">
          <Typography variant="h2" className="Typo Typo1">
            The Smart Solutions
          </Typography>
          <Typography variant="h5" className="Typo Typo2">
            Where need meets solution
          </Typography>
          <Link to="/our-services">
            <Button variant="outlined" size="large" className="button">
              Explore
              <ArrowForwardIcon fontSize="large" />
            </Button>
          </Link>
        </div>
        <div className="logo-div">
          <Flip left>
            <img src="/logo3.png" alt="logo" className="logo" />
          </Flip>
        </div>
      </div>
    </div>
  );
}

export default screen1;
