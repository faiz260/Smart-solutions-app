import React from "react";
import "./screen3.css";
import {Paper} from '@material-ui/core';
import Image from 'react-bootstrap/Image'

function screen3() {
  return (
    <div>
      <div className="screen3-uper-div">
          <Paper elevation={3} className="portfolio-div">
            <Image src="Faiz-front-photo.jpeg" className="profile-pic" roundedCircle/>
          </Paper>
      </div>
      <div className="screen3-lower-div"></div>
    </div>
  );
}

export default screen3;
