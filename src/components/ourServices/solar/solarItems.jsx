import React from "react";
import { Paper} from "@material-ui/core";
import "./solarItems.css";

export default function Item(props) {
  console.log("Solar Props >>", props);
  return (
    <Paper className="solarItems">
      <img
        alt={props.item[1].name}
        src={props.item[1].img}
        className="solar_images"
      />
    </Paper>
  );
}
