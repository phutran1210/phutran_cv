import React, { useState } from "react";
import { Box, Typography, Grid, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import Simplebar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import useStyle from "./style";
import BackgroundText from "../../components/backgroundText";
import Title from "../../components/title";
import Line from "../../components/line";
import { theme } from "../../theme";
const About = () => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: ""
  });
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    const { name, subject, message } = formData;
    e.preventDefault();
    window.open(
      `mailto:phutran121094@gmail.com?subject=${name +
      "-" +
      subject}&body=${message}`
    );
  };
  return (
    <Box className={classes.about} component="section">
      <Grid container component="section">
        <Grid item lg={6} xs={12} className={classes.info} component="section">
          <Line />
          <Simplebar style={{ height: "100%" }}>
            <Box position="relative">
              <BackgroundText>CONTACTS</BackgroundText>
              <Box position="relative" className={classes.infoContent}>
                {matches && <Box className={classes.infoDetail} />}
                <Box className={classes.getInTouchs}>
                  <Title>Get in Touch</Title>
                  <Grid container spacing={3}>
                    <Grid item lg={6} xs={12}>
                      <Box className={classes.getInTouch}>
                        <i className="fa fa-map-marker" />
                        <div>
                          <Typography color="textPrimary" variant="h4">
                            Address
                          </Typography>
                          <Typography color="textSecondary" variant="body1">
                            118 Huỳnh thiện Lộc,Phường Hòa Thạnh,Quận Tân Phú
                          </Typography>
                        </div>
                      </Box>
                    </Grid>

                    <Grid item lg={6} xs={12}>
                      <Box className={classes.getInTouch}>
                        <i className="fa fa-at" />
                        <div>
                          <Typography color="textPrimary" variant="h4">
                            Email
                          </Typography>
                          <Typography color="textSecondary" variant="body1">
                            phutran121094
                            <br />
                            @gmail.com
                          </Typography>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <Box className={classes.getInTouch}>
                        <i className="fa fa-skype" />
                        <div>
                          <Typography color="textPrimary" variant="h4">
                            Skype
                          </Typography>
                          <Typography color="textSecondary" variant="body1">
                            live:da82e76846c3598f || 01229066669
                          </Typography>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <Box className={classes.getInTouch}>
                        <i className="fa fa-phone" />
                        <div>
                          <Typography color="textPrimary" variant="h4">
                            Phone
                          </Typography>
                          <Typography color="textSecondary" variant="body1">
                            0779066669
                          </Typography>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.contactForm}>
                  <Title>Contact Form</Title>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item lg={6} xs={12}>
                        <input
                          type="text"
                          name="name"
                          className={classes.textField}
                          onChange={handleChange}
                          placeholder="Full Name"
                        />
                      </Grid>
                      <Grid item lg={6} xs={12}>
                        <input
                          type="text"
                          name="subject"
                          className={classes.textField}
                          onChange={handleChange}
                          placeholder="Subject"
                        />
                      </Grid>
                      <Grid item lg={12}>
                        <textarea
                          type="text"
                          name="message"
                          row="4"
                          className={clsx(classes.textField, classes.message)}
                          onChange={handleChange}
                          placeholder="Message"
                        />
                      </Grid>
                      <Grid item lg={12}>
                        <button className={classes.btnSubmit}>
                          <Typography component="span" variant="h4">
                            Send Message
                          </Typography>
                          <i className="fa fa-long-arrow-right" />
                        </button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </Box>
          </Simplebar>
        </Grid>
        <Grid item lg={6} xs={12}>
          <iframe
            title = "Ares home"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.416789270003!2d106.63698461480082!3d10.779355692319536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea51d8ec38b%3A0x3c9d903ce62ec26c!2zMTE4IEh14buzbmggVGhp4buHbiBM4buZYywgUGjDuiBUcnVuZywgVMOibiBQaMO6LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1610549657482!5m2!1svi!2s"
            width="100%"
            height={matches ? "100%" : '400px'}
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
