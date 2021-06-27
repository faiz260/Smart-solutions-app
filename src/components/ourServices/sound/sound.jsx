import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import "./sound.css";
import Footer from "../../footer/footer";
import LowerFooter from "../../footer/lower_footer";

function Sound() {
  return (
    <div className="sound_system">
      <div className="sound_header">
        <div className="sound_header_background"></div>
        <Typography variant="h2" className="sound_header_text">
          Best Sound systems in town for masjid, mehfil e naat, and events.
        </Typography>
      </div>

      <div>
        <Paper className="sound_des">
          <div className="sound_body">
            <Typography variant="h3" className="sound_body_text">
              <em>We deal in every kind of Sound Systems.</em>
            </Typography>
          </div>
          <div className="sound_des_div1">
            <Typography variant="p" className="sound_des_body">
              The CS-304 outdoor speaker features stainless steel hardware for
              all-weather durability. It is designed to offer the high
              intelligibility of weather-resistant horns combined with the high
              sound quality of dynamic speakers. The CS-304 employs the rotary
              switch that facilitates impedance changes. It also employs a
              constant directivity horn for clear sound output over its
              horizontal range of 90゜operation.
            </Typography>
            <img src="/Images/Sound_images/cs-304.jpg" alt="sound_system" />
          </div>
          <div className="sound_des_div1">
            <img src="/Images/Sound_images/cs-304.jpg" alt="sound_system" />
            <Typography variant="p" className="sound_des_body">
              The CS-304U UL listed outdoor speaker features stainless steel
              hardware for all-weather durability. It is designed to offer the
              high intelligibility of weather-resistant horns combined with the
              high sound quality of dynamic speakers. The CS-304 employs the
              rotary switch that facilitates impedance changes. It also employs
              a constant directivity horn for clear sound output over its
              horizontal range of 90゜operation.
            </Typography>
          </div>
          <div className="sound_des_div1">
            <Typography variant="p" className="sound_des_body">
              The HX-5B is a 2-way compact speaker system that permits both
              constant directivity control over a wide frequency range and
              changes in directivity. It is ideal for reproducing clear sound in
              spaces with long reverberation times or high background noises.
              The HX-5B is designed for indoor use.
            </Typography>
            <img src="/Images/Sound_images/HX-5B.jpg" alt="sound_system" />
          </div>
          <Button
            href="https://www.facebook.com/smartsolutionsunofficial"
            target="_blank"
            variant="contained"
            className="sound_des_button"
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

export default Sound;
