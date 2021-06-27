import React from "react";
import { Paper, Typography } from "@material-ui/core";
import "../services.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
function ServicesIndex() {
  return (
    <div className="services_div">
      <Paper elevation={3} className="service">
        <Fade bottom>
          <div className="service_content">
            <Link to="/our-services/arduino">
              <Typography variant="h2" className="product_head">
                Arduino
              </Typography>
            </Link>
            <Typography variant="body1" className="product_des">
              We provide a wide range of Arduino shields to fix your projects
              and professional assesments to help you complete your projects.{" "}
              <Link to="/our-services/automation">Learn More</Link>
            </Typography>
          </div>{" "}
          <img src="/Images/ARDUINO MKR MOTOR CARRIER.jpg" alt="" />
        </Fade>
      </Paper>

      <Paper elevation={3} className="service">
        <Fade bottom>
          <div className="service_content">
            <Link to="/our-services/solar-panels">
              <Typography variant="h2" className="product_head">
                Solar Panels
              </Typography>
            </Link>
            <Typography variant="body1" className="product_des">
              All kind of solar energy system for your home, industries, farms
              or any location are available here. Our professional team will
              convert your location on fully solar energy system which will
              reduce your electricity bill upto 0%.{" "}
              <Link to="/our-services/solar-panels">Learn More</Link>
            </Typography>
          </div>{" "}
          <img src="/solar-panel.jpeg" alt="" />
        </Fade>
      </Paper>

      <Paper elevation={3} className="service">
        <Fade bottom>
          <div className="service_content">
            <Link to="/our-services/sound-systems">
              <Typography variant="h2" className="product_head">
                Sound Systems
              </Typography>
            </Link>
            <Typography variant="body1" className="product_des">
              We provide all type of sound systems and services for masjid,
              events or mehfil e naat. Our experts will get your events covered
              with our high class sound systems.{" "}
              <Link to="/our-services/sound-systems">Learn More</Link>
            </Typography>
          </div>{" "}
          <img src="/echo-sound-system-hd-png-download.png" alt="" />
        </Fade>
      </Paper>

      <Paper elevation={3} className="service">
        <Fade bottom>
          <div className="service_content">
            <Link to="/our-services/automation">
              <Typography variant="h2" className="product_head">
                {" "}
                Automation
              </Typography>
            </Link>
            <Typography variant="body1" className="product_des">
              Industrial automation work related to hmi, plc, vfd siemens, allen
              bradley, fatek, delta. Industrial automation work related to hmi,
              plc, vfd siemens, allen bradley, fatek, delta. Industrial
              automation work related to hmi, plc, vfd siemens, allen bradley,
              fatek, delta.{" "}
              <Link to="/our-services/automation">Learn More</Link>
            </Typography>
          </div>{" "}
          <img src="/automation-home.jpg" alt="" />
        </Fade>
      </Paper>
    </div>
  );
}

export default ServicesIndex;
