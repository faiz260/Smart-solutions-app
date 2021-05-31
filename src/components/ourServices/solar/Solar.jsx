import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import "./solar.css";
import Carousel from "react-material-ui-carousel";
import Item from "./solarItems";
import item from "./solar.json";
import Footer from "../../footer/footer";
import LowerFooter from "../../footer/lower_footer";

function Solar() {
  return (
    <div className="solar_panel">
      <div className="solar_header">
        <div className="solar_header_background"></div>
        <Typography variant="h2" className="solar_header_text">
          Best Solar Panel service in town for your homes and factories.
        </Typography>
      </div>
      <div className="solar_body">
        <Typography variant="h2" className="solar_body_text">
          <em>Here's some of our work</em>
        </Typography>
        <Carousel navButtonsAlwaysVisible={true} className="carousel">
          {Object.entries(item).map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <div>
        <Paper className="solar_des">
          <Typography variant="h3" className="solar_des_head">
            We deal in every kind of Solar Energy Systems.
          </Typography>
          <Typography variant="h5" className="solar_des_body">
            We provide full fledge solar energy systems for your houses,
            factories, commercial buildings etc. Which will reduce your
            electricity bill to 0.
          </Typography>
          <Typography variant="h5" className="solar_des_body">
            We provide full fledge solar energy systems for your houses,
            factories, commercial buildings etc. Which will reduce your
            electricity bill to 0.
          </Typography>
          <Button variant="contained" className="solar_des_button">
            Get in touch with us
          </Button>
        </Paper>
      </div>
      <Footer />
      <LowerFooter />
    </div>
  );
}

export default Solar;
