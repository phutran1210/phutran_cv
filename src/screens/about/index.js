import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@material-ui/core";
import Simplebar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import useStyle from "./style";
import BackgroundText from "../../components/backgroundText";
import Title from "../../components/title";
import Line from "../../components/line";
import { theme } from "../../theme";
import CV from "../../assets/CV.pdf";
import clsx from "clsx";
// =====================
const About = () => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box className={classes.about} component="section">
      <Grid container component="section">
        {/* {!matches && <Grid item md={6} xs={12} className={classes.image} />} */}
        <Grid item md={6} xs={12} className={classes.info} component="section">
          <Line />
          <Simplebar style={{ height: "100%" }}>
            <Box className={classes.infoContent}>
              <BackgroundText>ABOUT ME</BackgroundText>
              <Box className={classes.infoDetail}>
                <Box className={classes.intro}>
                  <Typography variant="h2" component="p" color="textSecondary">
                    <span>Hello, I'm Trần Gia Phú </span>, a web-developer. I
                    have quite rich experience in website building and
                    maintenance. Also I am good at
                    <span>
                      {" "}
                      html, css,bootstrap, javascript, sass, react
                    </span>
                  </Typography>
                  <Box className={classes.control}>
                    <Box
                      component="a"
                      display="block"
                      target="_blank"
                      href={CV}
                      className={classes.btnDownload}
                    >
                      <i className="fa fa-download" />
                      Download CV
                    </Box>
                    <a
                      href="https://www.facebook.com/phutran.121094/"
                      target="__blank"
                    >
                      <i
                        className={clsx(
                          "fa fa-facebook-f",
                          classes.controlIcon
                        )}
                      />
                    </a>
                    <a href="mailto:phutran121094@gmail.com">
                      <i
                        className={clsx(
                          "fa fa-google",
                          classes.controlIcon
                        )}
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.hobbies}>
                <Title>My Hobbies</Title>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <Box className={classes.hobby}>
                      <i className="fa fa-suitcase" />
                      <Typography variant="h4" color="textPrimary">
                        Travelling
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Travel to new lands, see new people and know about new cultures
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Box className={classes.hobby}>
                      <i className="fa fa-music" />
                      <Typography variant="h4" color="textPrimary">
                        Listening to music
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Music is the most important thing make me relax
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Box className={classes.hobby}>
                      <i className="fa fa-cutlery" />
                      <Typography variant="h4" color="textPrimary">
                        Eating
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Just like our grandparents said: "It’s no use preaching
                        to a hungry man"
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Box className={classes.hobby}>
                      <i className="fa fa-book" />
                      <Typography variant="h4" color="textPrimary">
                        Reading books
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        The more books I read , the more I learn about life and everything.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Simplebar>
        </Grid>
        {matches && <Grid item md={6} xs={12} className={classes.image} />}
      </Grid>
    </Box>
  );
};

export default About;
