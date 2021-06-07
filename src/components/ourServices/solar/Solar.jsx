import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import "./solar.css";
import Carousel from "react-material-ui-carousel";
import Item from "./solarItems";
import item from "./solar.json";
import Footer from "../../footer/footer";
import LowerFooter from "../../footer/lower_footer";
import Fade from "react-reveal/Fade";

function Solar() {
  return (
    <div className="solar_panel">
      <div className="solar_header">
        <div className="solar_header_background"></div>

        <Typography variant="h2" className="solar_header_text">
          <Fade top>
            {" "}
            Best Solar Panel service in town for your homes and factories.
          </Fade>
        </Typography>
      </div>
      <div className="solar_body">
        <Typography variant="h2" className="solar_body_text">
          <Fade bottom>
            <em>Here's some of our work</em>
          </Fade>
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
            <Fade bottom>We deal in every kind of Solar Energy Systems.</Fade>
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              We provide full fledge solar energy systems for your houses,
              factories, commercial buildings etc. Which will reduce your
              electricity bill to 0. High Efficiency Low LID Bifacial PERC with
              Half-cut technology with High module conversion efficiency(up to
              20.9%). Bifacial technology enables energy harvesting from rear
              side (up to 25%). Along with high class inverters for
              non-interepted backup.
            </Fade>
          </Typography>
          {/* <Typography variant="p" className="solar_des_body">
            Along with high class inverters for non-interepted backup.
          </Typography> */}
          <Button
            href="https://www.facebook.com/smartsolutionsunofficial"
            target="_blank"
            variant="contained"
            className="solar_des_button"
          >
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
