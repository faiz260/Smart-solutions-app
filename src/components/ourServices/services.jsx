import React from "react";
import { Paper, Typography } from "@material-ui/core";
import "./services.css";
import { Link } from "react-router-dom";
  
function Services() {
  return (
    <div className="services_div">
      <Paper elevation={3} className="service">
        <div className="service_content">
          <Typography variant="h2">Solar Panels</Typography>
          <Typography variant="body1">
            Industrial automation work related to hmi, plc, vfd siemens, allen
            bradley, fatek, delta. Industrial automation work related to hmi,
            plc, vfd siemens, allen bradley, fatek, delta. Industrial automation
            work related to hmi, plc, vfd siemens, allen bradley, fatek, delta.{" "}
            <Link to="/solar-panels">Learn More</Link>
          </Typography>
        </div>{" "}
        <img src="/solar-panel.jpeg" />
      </Paper>
      <Paper elevation={3} className="service">
        <div className="service_content">
          <Typography variant="h2">Sound Systems</Typography>
          <Typography variant="body1">
            Industrial automation work related to hmi, plc, vfd siemens, allen
            bradley, fatek, delta. Industrial automation work related to hmi,
            plc, vfd siemens, allen bradley, fatek, delta. Industrial automation
            work related to hmi, plc, vfd siemens, allen bradley, fatek, delta.{" "}
            <Link to="">Learn More</Link>
          </Typography>
        </div>{" "}
        <img src="/echo-sound-system-hd-png-download.png" />
      </Paper>
      <Paper elevation={3} className="service">
        <div className="service_content">
          <Typography variant="h2"> Industrial solutions</Typography>
          <Typography variant="body1">
            Industrial automation work related to hmi, plc, vfd siemens, allen
            bradley, fatek, delta. Industrial automation work related to hmi,
            plc, vfd siemens, allen bradley, fatek, delta. Industrial automation
            work related to hmi, plc, vfd siemens, allen bradley, fatek, delta.{" "}
            <Link to="">Learn More</Link>
          </Typography>
        </div>{" "}
        <img src="/automation-home.jpg" />
      </Paper>
      <Paper elevation={3} className="service">
        <div className="service_content">
          <Typography variant="h2">Automation</Typography>
          <Typography variant="body1">
            Industrial automation work related to hmi, plc, vfd siemens, allen
            bradley, fatek, delta. Industrial automation work related to hmi,
            plc, vfd siemens, allen bradley, fatek, delta. Industrial automation
            work related to hmi, plc, vfd siemens, allen bradley, fatek, delta.{" "}
            <Link to="">Learn More</Link>
          </Typography>
        </div>{" "}
        <img src="/plc-automation-systems-500x500.jpg" />
      </Paper>
    </div>
  );
}

export default Services;
