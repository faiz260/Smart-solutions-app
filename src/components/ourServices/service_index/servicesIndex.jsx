import React from "react";
import { Paper, Typography } from "@material-ui/core";
import "../services.css";
import { Link } from "react-router-dom";

function ServicesIndex() {
  return (
    <div className="services_div">
      <Paper elevation={3} className="service">
        <div className="service_content">
          <Link to="/our-services/solar-panels">
            <Typography variant="h2" className="product_head">
              Solar Panels
            </Typography>
          </Link>
          <Typography variant="body1" className="product_des">
            Industrial automation work related to hmi, plc, vfd siemens, allen
            bradley, fatek, delta. Industrial automation work related to hmi,
            plc, vfd siemens, allen bradley, fatek, delta. Industrial automation
            work related to hmi, plc, vfd siemens, allen bradley, fatek, delta.{" "}
            <Link to="/our-services/solar-panels">Learn More</Link>
          </Typography>
        </div>{" "}
        <img src="/solar-panel.jpeg" alt="" />
      </Paper>

      <Paper elevation={3} className="service">
        <div className="service_content">
          <Link to="/our-services/sound-systems">
            <Typography variant="h2" className="product_head">
              Sound Systems
            </Typography>
          </Link>
          <Typography variant="body1" className="product_des">
            Industrial automation work related to hmi, plc, vfd siemens, allen
            bradley, fatek, delta. Industrial automation work related to hmi,
            plc, vfd siemens, allen bradley, fatek, delta. Industrial automation
            work related to hmi, plc, vfd siemens, allen bradley, fatek, delta.{" "}
            <Link to="/our-services/sound-systems">Learn More</Link>
          </Typography>
        </div>{" "}
        <img src="/echo-sound-system-hd-png-download.png" alt="" />
      </Paper>

      <Paper elevation={3} className="service">
        <div className="service_content">
          <Link to="/our-services/industrial-solutions">
            <Typography variant="h2" className="product_head">
              {" "}
              Industrial solutions
            </Typography>
          </Link>
          <Typography variant="body1" className="product_des">
            Industrial automation work related to hmi, plc, vfd siemens, allen
            bradley, fatek, delta. Industrial automation work related to hmi,
            plc, vfd siemens, allen bradley, fatek, delta. Industrial automation
            work related to hmi, plc, vfd siemens, allen bradley, fatek, delta.{" "}
            <Link to="/our-services/industrial-solutions">Learn More</Link>
          </Typography>
        </div>{" "}
        <img src="/automation-home.jpg" alt="" />
      </Paper>

      <Paper elevation={3} className="service">
        <div className="service_content">
          <Link to="/our-services/automation">
            <Typography variant="h2" className="product_head">
              Automation
            </Typography>
          </Link>
          <Typography variant="body1" className="product_des">
            Industrial automation work related to hmi, plc, vfd siemens, allen
            bradley, fatek, delta. Industrial automation work related to hmi,
            plc, vfd siemens, allen bradley, fatek, delta. Industrial automation
            work related to hmi, plc, vfd siemens, allen bradley, fatek, delta.{" "}
            <Link to="/our-services/automation">Learn More</Link>
          </Typography>
        </div>{" "}
        <img src="/plc-automation-systems-500x500.jpg" alt="" />
      </Paper>
    </div>
  );
}

export default ServicesIndex;