import React from "react";
import "./screen2.css";
import { Typography, Paper, Card, CardContent } from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../../../assets/6209-social-media-service-bps.json";

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
        <Typography variant="h2" className="Typo-text">
          Here's What We Offering
        </Typography>
        <Lottie options={defaultOptions} className="lottie" />
      </div>
      <div className="right-div">
        <div className="cards-div1">
          <Card className="card">
            <CardContent></CardContent>
          </Card>{" "}
          <Card className="card">
            <CardContent></CardContent>
          </Card>{" "}
        </div>
        <div className="cards-div2">
          <Card className="card">
            <CardContent></CardContent>
          </Card>{" "}
          <Card className="card">
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </Paper>
  );
}

export default screen2;
