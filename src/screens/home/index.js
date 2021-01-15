import React, { useCallback, useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import useStyle from "./style";
const textAnimate = "I am a Web developer.";
const Home = () => {
  const classes = useStyle();
  const [text, setText] = useState([]);
  const typingAnimate = useCallback(() => {
    let chars = textAnimate.split("");
    let temp = "";
    for (let i in chars) {
      setTimeout(() => {
        temp += chars[i];
        setText([...text, temp]);
      }, 80 * i);
    }
  }, []);
  useEffect(() => {
    typingAnimate();
  }, []);
  return (
    <Box className={classes.home}>
      <Box className={classes.content}>
        <Typography variant="h1" className={classes.name}>
          <span>Trần </span>
          <span>Gia Phú</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.job}>
          <span> {text.join()} </span>
          <span>&#124;</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
