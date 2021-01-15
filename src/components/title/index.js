import React from "react";
import { Typography } from "@material-ui/core";
const title = {
  fontWeight: "bold",
  marginBottom: 20
};
const Title = ({ children = "" }) => {
  const firstWord = children.split(" ")[0];
  const lastWords = children
    .split(" ")
    .slice(1,)
    .join(" ");
  return (
    <Typography variant="h3" color="textPrimary" style={title}>
      <Typography variant="inherit" color="secondary">
        {firstWord}{" "}
      </Typography>
      {lastWords}
    </Typography>
  );
};

export default Title;
