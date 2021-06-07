import React from "react";
import "./screen3.css";
import { Paper, Typography } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import Flip from "react-reveal/Flip";

function screen3() {
  return (
    <div>
      <div className="screen3-uper-div">
        <Paper elevation={3} className="portfolio-div">
          <Image
            src="Faiz-front-photo.jpeg"
            alt="owner_picture"
            className="profile-pic"
            roundedCircle
          />
          <Typography variant="h5" className="name">
            <Flip top>Faiz Shahnawaz</Flip>
          </Typography>
          <Typography variant="body1" className="details">
            <em>
              <Flip right>
                " Lorem Ipsumn doner Lizards are a widespread group of squamate
                reptiles, with over reptiles, with over "
              </Flip>
            </em>
          </Typography>
        </Paper>
      </div>
      <div className="screen3-lower-div"></div>
    </div>
  );
}

export default screen3;
