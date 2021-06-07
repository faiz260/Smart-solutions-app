import React from "react";
import "./screen2.css";
import {
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../../../assets/6209-social-media-service-bps.json";
import Fade from "react-reveal/Fade";

function screen2() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Paper elevation={3} className="div-wrapper">
      <div className="left-div">
        <Fade>
          <Typography variant="h2" className="Typo-text">
            Here's What We Offer
          </Typography>
        </Fade>
        <Lottie options={defaultOptions} className="lottie" />
      </div>
      <div className="right-div">
        <div className="cards-div1">
          <Fade bottom>
            <Card className="card">
              <CardContent className="card-content">
                {" "}
                <CardMedia
                  className="card-media"
                  image="/Images/ARDUINO MKR MOTOR CARRIER.jpg"
                  title="Contemplative Reptile"
                />
                <Typography className="card-typo" variant="h5" component="h2">
                  Arduino
                </Typography>
                <Typography
                  className="card-typo"
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  {" "}
                  Industrial automation work related to hmi, plc, vfd siemens,
                  allen bradley, fatek, delta.
                </Typography>
              </CardContent>
            </Card>{" "}
            <Card className="card">
              <CardContent className="card-content">
                {" "}
                <CardMedia
                  className="card-media"
                  image="/solar-panel.jpeg"
                  title="Contemplative Reptile"
                />
                <Typography className="card-typo" variant="h5" component="h2">
                  Solar Systems
                </Typography>
                <Typography
                  className="card-typo"
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  {" "}
                  Stand alone system for irragation, farms and homes.
                </Typography>
              </CardContent>
            </Card>{" "}
          </Fade>
        </div>
        <div className="cards-div2">
          <Fade bottom>
            <Card className="card">
              <CardContent className="card-content">
                {" "}
                <CardMedia
                  className="card-media"
                  image="/echo-sound-system-hd-png-download.png"
                  title="Contemplative Reptile"
                />
                <Typography className="card-typo" variant="h5" component="h2">
                  Sound Systems
                </Typography>
                <Typography
                  className="card-typo"
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  {" "}
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </Card>{" "}
            <Card className="card">
              <CardContent className="card-content">
                {" "}
                <CardMedia
                  className="card-media"
                  image="/automation-home.jpg"
                  title="Contemplative Reptile"
                />
                <Typography className="card-typo" variant="h5" component="h2">
                  Automation
                </Typography>
                <Typography
                  className="card-typo"
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  {" "}
                  Home automation , water pump automatic filling system for
                  water tank, Automatic generator starter, Motor starting panel.
                </Typography>
              </CardContent>
            </Card>{" "}
          </Fade>
        </div>
      </div>
    </Paper>
  );
}

export default screen2;
