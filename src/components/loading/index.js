import React from "react";
import { Box, useMediaQuery, makeStyles } from "@material-ui/core";
import { theme } from "../../theme";

const loadingItem = {
  background: theme.palette.common.black,
  width: 0,
  height: "100%",
  animation: "$loadingAnimate 2s ease-in-out",
  position: "absolute",
  top: 0
};

const Loading = () => {
  const match = useMediaQuery(theme.breakpoints.up("md"));
  const useStyle = makeStyles(theme => ({
    loadingItem1: {
      ...loadingItem,
      right: '75%'
    },
    loadingItem2: {
      ...loadingItem,
      right: '50%'
    },
    loadingItem3: {
      ...loadingItem,
      right: '25%'
    },
    loadingItem4: {
      ...loadingItem,
      right: 0
    },
    loadingItemXs: {
        ...loadingItem,
        right: 0
    },
    "@keyframes loadingAnimate": {
      "0%": {},
      "50%": { width: match ? "25%" : "100%" },
      "100%": {
        width: 0
      }
    }
  }));

  const classes = useStyle();
  if (match) {
    return (
      <Box
        height="100%"
        display="flex"
        zIndex={100}
        width="100%"
        position="absolute"
        top={0}
        left={0}
      >
        <div className={classes.loadingItem1} />
        <div className={classes.loadingItem2} />
        <div className={classes.loadingItem3} />
        <div className={classes.loadingItem4} />
      </Box>
    );
  }
  return (
    <Box
      height="100%"
      display="flex"
      zIndex={100}
      width="100%"
      position="fixed"
      top={0}
      left={0}
    >
      <div className={classes.loadingItemXs} />
    </Box>
  );
};

export default Loading;
