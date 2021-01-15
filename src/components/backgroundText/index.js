import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  text: {
    position: "absolute",
    top: 0,
    fontSize: 120,
    color: theme.palette.text.primary,
    opacity: 0.05,
    fontWeight: "bold",
    letterSpacing: '4px',
    whiteSpace: 'no-wrap',
    width:'100%',
    textAlign:'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 100
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 70
    }
  }
}));

const BackgroundText = ({ children }) => {
  const classes = useStyle();
  return (
    <Typography component="p" className={classes.text}>
      {children}
    </Typography>
  );
};

export default BackgroundText;
