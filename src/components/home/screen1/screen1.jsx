import React from "react";
import "./screen1.css";
import { Container, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

function screen1() {
  return (
    <div className="div">
      <div className="inner-div">
        <div className="text-div">
          <Typography variant="h2" className="Typo Typo1">
            Smart Solutions
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
          <img src="/logo3.png" className="logo" />
        </div>
      </div>
    </div>
  );
}

export default screen1;
