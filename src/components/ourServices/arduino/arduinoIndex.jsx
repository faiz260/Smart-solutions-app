import React from "react";
import Arduino from "../../../data.json";
import { Typography, Paper, Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./arduinoIndex.css";
import Footer from "../../footer/footer";
import LowerFooter from "../../footer/lower_footer";

const ArduinoIndex = () => {
  return (
    <div className="arduino_div">
      <Paper elevation={0} square="true" className="arduino_top">
        <Typography variant="h2" className="arduino_top_text">
          We Provide you a wide range of Arduino Shields to fix your project
        </Typography>
      </Paper>
      <div className="arduinoIndex">
        {Object.entries(Arduino).map(([slug, { name, img, price }]) => {
          return (
            <Link to={`/our-services/arduino/${slug}`} key={name}>
              <Card key={name} className="arduino_card">
                <CardContent className="card_content">
                  {" "}
                  <img src={img} alt={name} className="card_image" />
                  <Typography variant="h6" component="h1" color="textSecondary">
                    {name}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="h1"
                    color="textSecondary"
                  >
                    {price}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      <Footer />
      <LowerFooter />
    </div>
  );
};
export default ArduinoIndex;
