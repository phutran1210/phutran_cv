import React from "react";
import { Box, Typography, Grid, LinearProgress, useMediaQuery } from "@material-ui/core";
import Simplebar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import useStyle from "./style";
import BackgroundText from "../../components/backgroundText";
import Title from "../../components/title";
import Line from "../../components/line";
import { theme } from "../../theme";

const contentDescription =
  "Research source code of ASP.NET Zero.Migrate source code from MVC to ASP.NET Core MVC.Demo Drag and Drop component to create a template forwebsites.Write the project’ documentations"

const experienceData = [
  {
    name: "Mentor",
    time: "Sept 2020 - Present",
    border: true,
    unit: "Cybersoft Academy",
    description: "Support student to learn front end course at Cybersoft academy",
  },
  {
    name: "Inter .net Developer",
    time: "Mar 2018 - Sept 2018",
    border: false,
    unit: "UNICCS Việt Nam",
    description:
      `${contentDescription}`
  }
];

const educationData = [
  {
    name: "BACH KHOA HA NOI-HATECH",
    time: "2014 - 2018",
    border: true,
    unit: "BACH KHOA HA NOI-HATECH",
    description:
      "Learn about major: computer science"
  },
  {
    name: "Website Design - Front End Developer",
    time: "2019 - 2020",
    border: true,
    unit: "Cybersoft Academy",
    description:
      "Learn HTML, CSS, Javascript, SASS, React, Redux, Typescript, Angular 9+"
  },
  {
    name: "Back-End Developer",
    time: "2019 - 2020",
    border: false,
    unit: "Cybersoft Academy",
    description: "Learn nodejs, express, mongoDB, Socket.io"
  }
];

const personalSkills = [
  { name: "Communication", percent: 100, border: true },
  { name: "Team Work", percent: 100, border: true },
  { name: "English", percent: 100, border: true },
  { name: "Chinese", percent: 100, border: true },
  { name: "Mindset", percent: 100, border: true },
  { name: "Research", percent: 100, border: false }
];
const professionalSkills = [
  { name: "HTML & CSS & Bootstrap", percent: 100, border: true },
  { name: "SASS", percent: 100, border: true },
  { name: "Javascript & Typescript", percent: 100, border: true },
  // { name: "Angular 9+", percent: 70, border: true },
  { name: "ReactJS", percent: 100, border: true },
  { name: "ExpressJS", percent: 100, border: true },
  { name: "SQL Server", percent: 100, border: true },
  { name: "MongoDB", percent: 100, border: false }
];
const ResumeItem = ({ classes = {}, item = {} }) => {
  return (
    <Box
      className={classes.resumeItem}
      style={{
        borderBottom: item.border ? "0.5px solid rgba(255,255,255,0.2)" : ""
      }}
    >
      <Typography variant="h4" color="textPrimary">
        {item.name}
      </Typography>
      <Typography variant="body2" component="span">
        {item.time} | {item.unit}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        {item.description}
      </Typography>
    </Box>
  );
};

const ProgressItem = ({ classes = {}, item = {} }) => {
  return (
    <Box
      className={classes.resumeItem}
      style={{
        borderBottom: item.border ? "0.5px solid rgba(255,255,255,0.2)" : ""
      }}
    >
      <Typography variant="h4" color="textPrimary">
        {item.name}
      </Typography>
      <LinearProgress
        style={{ marginTop: "10px" }}
        variant="determinate"
        color="secondary"
        value={item.percent}
      />
    </Box>
  );
};

const Resume = () => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box className={classes.resume} component="section">
      <Grid container component="section">
        {!matches && <Grid item md={6} xs={12} className={classes.image} />}
        <Grid item md={6} xs={12} className={classes.info} component="section">
          <Line />
          <Simplebar style={{ height: "100%" }}>
            <BackgroundText>Resume</BackgroundText>
            <Box position="relative" className={classes.infoContent}>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Title>My Experience</Title>
                  <Box className={classes.resumeContent}>
                    {experienceData.map((item, i) => (
                      <ResumeItem key={i} classes={classes} item={item} />
                    ))}
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Title>My Education</Title>
                  <Box className={classes.resumeContent}>
                    {educationData.map((item, i) => (
                      <ResumeItem key={i} classes={classes} item={item} />
                    ))}
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Title>Personal Skills</Title>
                  <Box className={classes.resumeContent}>
                    {personalSkills.map((item, i) => (
                      <ProgressItem key={i} classes={classes} item={item} />
                    ))}
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Title>Professional Skills</Title>
                  <Box className={classes.resumeContent}>
                    {professionalSkills.map((item, i) => (
                      <ProgressItem key={i} classes={classes} item={item} />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Simplebar>
        </Grid>
        {matches && <Grid item md={6} xs={12} className={classes.image} />}
      </Grid>
    </Box>
  );
};

export default Resume;
