import React from "react";
import "./about.css";
import { Paper, Typography } from "@material-ui/core";

function about() {
  return (
    <div className="about_div">
      <Paper elevation={3} className="vision_paper">
        <Typography variant="h1" className="about_heading">
          About us
        </Typography>
        <div className="content_div">
          <Typography variant="subtitle1" className="content">
            Welcome to [SHOP NAME]! We aim to offer our customers a variety of
            the latest [PRODUCTS CATEGORY NAME]. We’ve come a long way, so we
            know exactly which direction to take when supplying you with high
            quality yet budget-friendly products. We offer all of this while
            providing excellent customer service and friendly support.
          </Typography>
          <Typography variant="subtitle1" className="content">
            We always keep an eye on the latest trends in [PRODUCTS CATEGORY
            NAME] and put our customers’ wishes first. That is why we have
            satisfied customers all over the world, and are thrilled to be a
            part of the [PRODUCTS CATEGORY NAME] industry.{" "}
          </Typography>
          <Typography variant="subtitle1" className="content">
            The interests of our customers are always top priority for us, so we
            hope you will enjoy our products as much as we enjoy making them
            available to you.
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3} className="owner_paper">
      
      </Paper>
    </div>
  );
}

export default about;
