import React from "react";
import { Paper, Button } from "@material-ui/core";
import "./solarItems.css";

export default function Item(props) {
  console.log("Solar Props >>", props.item[1].name);
  return (
    <Paper className="solarItems">
      <h2>{props.item[1].name}</h2>
      <p>{props.item[1].description}</p>

      <Button >Check it out!</Button>
    </Paper>
  );
}
