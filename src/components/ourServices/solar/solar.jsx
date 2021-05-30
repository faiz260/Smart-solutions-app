import React from "react";
import { Typography } from "@material-ui/core";
import "./solar.css";
import Carousel from "react-material-ui-carousel";
import Item from "./solarItems";
import item from "./solar.json";

function Solar(props) {
  return (
    <div className="solar_panel">
      <div className="solar_header">
        <div className="solar_header_background"></div>
        <Typography variant="h2" className="solar_header_text">
          Best Solar Panel service in town.
        </Typography>
      </div>
      <div className="solar_body">
        <Carousel navButtonsAlwaysVisible={true} className="carousel">
          {Object.entries(item).map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Solar;
