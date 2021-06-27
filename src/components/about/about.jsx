import React, { useState } from "react";
import "./about.css";
import { Paper, Typography, Link } from "@material-ui/core";
import Footer from "../footer/footer";
import LowerFooter from "../footer/lower_footer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

function About() {
  const [readMore, setReadMore] = useState(true);

  return (
    <div>
      <div className="about_div">
        <Paper elevation={3} className="vision_paper">
          <Flip left>
            <Typography variant="h1" className="about_heading">
              About us
            </Typography>
            <div className="content_div">
              {window.innerWidth < 800 ? (
                <div>
                  {readMore ? (
                    <Typography variant="subtitle1" className="content">
                      Welcome to The Smart Solutions! We aim to offer our
                      customers a variety of the latest and smartest services.
                      We’ve come a long way, so we know exactly which direction
                      to take when supplying you with high quality yet
                      budget-friendly services. We offer all of this while
                      providing excellent customer service and friendly support.
                      <Link
                        className="rm_link"
                        onClick={() => setReadMore(false)}
                      >
                        Read More
                      </Link>
                    </Typography>
                  ) : (
                    <div>
                      <Typography variant="subtitle1" className="content">
                        Welcome to The Smart Solutions! We aim to offer our
                        customers a variety of the latest and smartest services.
                        We’ve come a long way, so we know exactly which
                        direction to take when supplying you with high quality
                        yet budget-friendly services. We offer all of this while
                        providing excellent customer service and friendly
                        support.
                      </Typography>
                      <Typography variant="subtitle1" className="content">
                        We always keep an eye on the latest trends in industry
                        and put our customers’ wishes first. That is why we have
                        satisfied customers all over the country.{" "}
                      </Typography>
                      <Typography variant="subtitle1" className="content">
                        The interests of our customers are always top priority
                        for us, so we hope you will enjoy our products as much
                        as we enjoy making them available to you.
                        <Link
                          className="rm_link"
                          onClick={() => setReadMore(true)}
                        >
                          Read Less
                        </Link>
                      </Typography>
                    </div>
                  )}{" "}
                </div>
              ) : (
                <div>
                  <Typography variant="subtitle1" className="content">
                    Welcome to The Smart Solutions! We aim to offer our
                    customers a variety of the latest and smartest services.
                    We’ve come a long way, so we know exactly which direction to
                    take when supplying you with high quality yet
                    budget-friendly services. We offer all of this while
                    providing excellent customer service and friendly support.
                  </Typography>
                  <Typography variant="subtitle1" className="content">
                    We always keep an eye on the latest trends in industry and
                    put our customers’ wishes first. That is why we have
                    satisfied customers all over the country.{" "}
                  </Typography>
                  <Typography variant="subtitle1" className="content">
                    The interests of our customers are always top priority for
                    us, so we hope you will enjoy our products as much as we
                    enjoy making them available to you.
                  </Typography>
                </div>
              )}
            </div>
          </Flip>
        </Paper>

        <div className="div_2">
          <Paper elevation={3} className="owner_des_paper">
            <div className="des_content">
              <Typography variant="body2" className="des_typo">
                <em>
                  <Fade>
                    "We always keep an eye on the latest trends in technology
                    and put our customers’ wishes first. That is why we have
                    satisfied customers all over the Pakistan, and are thrilled
                    to be a part of The Smart Solutions"{" "}
                  </Fade>
                </em>
              </Typography>
            </div>
            <div>
              <Fade>
                {/* <img src="/Faiz-front-photo.jpeg" /> */}
                <Typography variant="h4" className="owner_name">
                  Sohail Mughal
                </Typography>
                <Typography variant="subtitle1">
                  Owner The Smart Solutions
                </Typography>
              </Fade>
            </div>
          </Paper>
        </div>
        <div className="div_3">
          <Typography variant="h2" className="div_3_typo">
            Our Services
          </Typography>
          <div className="services_div">
            <Fade bottom>
              <div className="services_div_child">
                <div className="product_div">
                  <Typography variant="h5" className="product_heading">
                    Industrial solutions
                  </Typography>
                  <div className="typo_gap"></div>
                  <Typography variant="body2" className="product_typo">
                    Industrial automation work related to hmi, plc, vfd siemens,
                    allen bradley, fatek, delta.{" "}
                  </Typography>
                </div>
                <div className="product_div">
                  <Typography variant="h5" className="product_heading">
                    Solar Systems
                  </Typography>
                  <div className="typo_gap"></div>
                  <Typography variant="body2" className="product_typo">
                    Stand alone system for irragation, farms and homes.{" "}
                  </Typography>
                </div>
              </div>
              <div className="services_div_child">
                <div className="product_div">
                  <Typography variant="h5" className="product_heading">
                    Sound Systems
                  </Typography>
                  <div className="typo_gap"></div>
                  <Typography variant="body2" className="product_typo">
                    Lizards are a widespread group of squamate reptiles, with
                    over{" "}
                  </Typography>
                </div>
                <div className="product_div">
                  <Typography variant="h5" className="product_heading">
                    Automation
                  </Typography>
                  <div className="typo_gap"></div>
                  <Typography variant="body2" className="product_typo">
                    Home automation , water pump automatic filling system for
                    water tank, Automatic generator starter, Motor starting
                    panel.{" "}
                  </Typography>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
      <LowerFooter />
    </div>
  );
}

export default About;
