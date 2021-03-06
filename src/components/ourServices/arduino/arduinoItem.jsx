import React from "react";
import Data from "../../../data.json";
import { Card, Button, CardContent, Typography, Fade } from "@material-ui/core";
import { useParams } from "react-router-dom";
import "./arduinoItem.css";
import Footer from "../../footer/footer";
import LowerFooter from "../../footer/lower_footer";
import Flip from "react-reveal/Flip";

const ArduinoItem = () => {
  const { slug } = useParams();
  const data = Data[slug];
  const { name, img, price, des } = data;

  return (
    <div>
      <div className="item_div">
        <Flip left>
          <Card className="item_card">
            <img src={img} alt={name} className="item_img" />
          </Card>
        </Flip>
        <Flip right>
          <Card>
            <CardContent className="item_des_card">
              <Typography variant="h4" className="item_name">
                {name}
              </Typography>
              <Typography variant="body1" className="item_des">
                {" "}
                {des}{" "}
              </Typography>
              <Typography variant="h6" className="item_price">
                Price: {price}
              </Typography>
              <Button
                target="_blank"
                href="https://www.facebook.com/smartsolutionsunofficial"
                className="order_button"
                variant="outlined"
              >
                Order
              </Button>
            </CardContent>
          </Card>
        </Flip>
      </div>
      <Footer />
      <LowerFooter />
    </div>
  );
};
export default ArduinoItem;
