import React, { useState } from "react";
import "./about.css";
import { Paper, Typography, Link } from "@material-ui/core";

function About() {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="about_div">
      <Paper elevation={3} className="vision_paper">
        <Typography variant="h1" className="about_heading">
          About us
        </Typography>
        <div className="content_div">
          {window.innerWidth < 800 ? (
            <div>
              {readMore ? (
                <Typography variant="subtitle1" className="content">
                  Welcome to [SHOP NAME]! We aim to offer our customers a
                  variety of the latest [PRODUCTS CATEGORY NAME]. We’ve come a
                  long way, so we know exactly which direction to take when
                  supplying you with high q uality yet budget-friendly products.
                  We offer all of this while providing excellent customer
                  service and friendly support.
                  <Link className="rm_link" onClick={() => setReadMore(false)}>
                    Read More
                  </Link>
                </Typography>
              ) : (
                <div>
                  <Typography variant="subtitle1" className="content">
                    Welcome to [SHOP NAME]! We aim to offer our customers a
                    variety of the latest [PRODUCTS CATEGORY NAME]. We’ve come a
                    long way, so we know exactly which direction to take when
                    supplying you with high quality yet budget-friendly
                    products. We offer all of this while providing excellent
                    customer service and friendly support.
                  </Typography>
                  <Typography variant="subtitle1" className="content">
                    We always keep an eye on the latest trends in [PRODUCTS
                    CATEGORY NAME] and put our customers’ wishes first. That is
                    why we have satisfied customers all over the world, and are
                    thrilled to be a part of the [PRODUCTS CATEGORY NAME]
                    industry.{" "}
                  </Typography>
                  <Typography variant="subtitle1" className="content">
                    The interests of our customers are always top priority for
                    us, so we hope you will enjoy our products as much as we
                    enjoy making them available to you.
                    <Link className="rm_link" onClick={() => setReadMore(true)}>
                      Read Less
                    </Link>
                  </Typography>
                </div>
              )}{" "}
            </div>
          ) : (
            <div>
              <Typography variant="subtitle1" className="content">
                Welcome to [SHOP NAME]! We aim to offer our customers a variety
                of the latest [PRODUCTS CATEGORY NAME]. We’ve come a long way,
                so we know exactly which direction to take when supplying you
                with high quality yet budget-friendly products. We offer all of
                this while providing excellent customer service and friendly
                support.
              </Typography>
              <Typography variant="subtitle1" className="content">
                We always keep an eye on the latest trends in [PRODUCTS CATEGORY
                NAME] and put our customers’ wishes first. That is why we have
                satisfied customers all over the world, and are thrilled to be a
                part of the [PRODUCTS CATEGORY NAME] industry.{" "}
              </Typography>
              <Typography variant="subtitle1" className="content">
                The interests of our customers are always top priority for us,
                so we hope you will enjoy our products as much as we enjoy
                making them available to you.
              </Typography>
            </div>
          )}
        </div>
      </Paper>
      <div className="div_2">
        <Paper elevation={0} className="owner_paper">
          <img src="/Faiz-front-photo.jpeg" />
          <Typography variant="h4" className="owner_name">Faiz Shahnawaz</Typography>
          <Typography variant="subtitle1">Owner Smart Solutions</Typography>
        </Paper>
        <Paper elevation={0} className="owner_des_paper">
          <div className="des_content">
            <Typography variant="body2" className="des_typo">
              "We always keep an eye on the latest trends in [PRODUCTS CATEGORY
              NAME] and put our customers’ wishes first. That is why we have
              satisfied customers all over the world, and are thrilled to be a
              part of the [PRODUCTS CATEGORY NAME] industry."{" "}
            </Typography>
          </div>
        </Paper>
      </div>
      <div className="div_3">
                
      </div>
    </div>
  );
}

export default About;
