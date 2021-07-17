import React from "react";
import { Paper, Typography, Link } from "@material-ui/core";
import "./lower_footer.css";

function lower_footer() {
  return (
    <Paper className="lower_footer">
      <Typography variant="body2" component="h6" className="lf_typo">
        <Link
          target="_blank"
          href="https://faiz-shahnawaz.netlify.app/"
          className="lf_typo"
        >
          {" "}
          Developed by Faiz Shahnawaz{" "}
        </Link>
      </Typography>
    </Paper>
  );
}

export default lower_footer;
