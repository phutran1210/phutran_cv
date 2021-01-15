import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@material-ui/core";
import Simplebar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import useStyle from "./style";
import BackgroundText from "../../components/backgroundText";
import Title from "../../components/title";
import Line from "../../components/line";

import Maua from "../../assets/img/maua.jpg";
import Oneway from "../../assets/img/oneway.jpg";
import MauaAdmin from "../../assets/img/admin.png";
import Vietjet from "../../assets/img/vietjet.jpg";
import VietjetBooking from "../../assets/img/vietjet-booking.jpg";
import MyPortforlio from '../../assets/img/img-cv.PNG';
import Elearning from '../../assets/img/E-learning.PNG';
import Movie from '../../assets/img/img-movie.PNG'
import Landingslide from '../../assets/img/Landingslide.PNG';
import Scotch from '../../assets/img/scotch.PNG'
import { theme } from "../../theme";

// tech content
const MY_PORTFORLIO = 'ReactJS, Lodash, History, clsx, Material UI, Deloyment by surge'
const E_LEARNING = 'ReactJS,Redux,Redux-thunk, Axios, Material, Yup, Formik, React swipeable views, Prop Type, Notistack';
const MOVIE = 'ReactJS, React slick, Redux, Redux-thunk, Axios, sweetalert2, Prop type, Material UI'
const LANDINGSLIDE = "HTML,SASS,JS,Animation";
const SCOTCH = "HTML,SASS,JS,Animation";

const portfolioData = [
  // {
  //   name: "Maua App for Buyer",
  //   tech: "ReactJS",
  //   img: Maua,
  //   path: "https://www.maua.app/",
  // },
  // {
  //   name: "Maua App for Vendor",
  //   tech: "ReactJS",
  //   img: Maua,
  //   path: "https://vendor.maua.app/",
  // },
  // {
  //   name: "Oneway Radio",
  //   tech: "Angular 7",
  //   img: Oneway,
  //   path: "http://oneway.vn/",
  // },
  // {
  //   name: "Maua Admin Portal",
  //   tech: "ReactJS",
  //   img: MauaAdmin,
  //   path: "https://admin.maua.app/",
  // },
  // {
  //   name: "Vietjet CMS",
  //   tech: "ReactJS",
  //   img: Vietjet,
  //   path: "",
  // },
  // {
  //   name: "Vietjet Website",
  //   tech: "ReactJS",
  //   img: VietjetBooking,
  //   path: "",
  // },
  {
    name: "My Portforlio",
    tech: `${MY_PORTFORLIO}`,
    img: MyPortforlio,
    path: "dev_phutran1210.surge.sh",
  },
  {
    name: "E-learning Website",
    tech: `${E_LEARNING}`,
    img: Elearning,
    path: "https://cybersoft-e-learning.web.app/",
  },
  {
    name: "Movie Website",
    tech: `${MOVIE}`,
    img: Movie,
    path: "https://cybersoft-movie-phutran.web.app/",
  },
  {
    name: "Landingslide",
    tech: `${LANDINGSLIDE}`,
    img: Landingslide,
    path: "https://landslide.digital/",
  },
  {
    name: "Scotch",
    tech: `${SCOTCH}`,
    img: Scotch,
    path: "https://scotch-clone.web.app/index.html",
  },

];

const PortfolioItem = ({ classes = {}, item = {} }) => (
  <Box className={classes.portfolioItem}>
    <Box className={classes.portfolioImage}>
      <a className={classes.overlay} target="__blank" href={item.path}>
        <i className="fa fa-link" />
      </a>
      <img src={item.img} alt="project" />
    </Box>
    <div className={classes.detail}>
      <Typography variant="h4" color="textPrimary">
        {item.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {item.tech}
      </Typography>
    </div>
  </Box>
);

const Portfolio = () => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box component="section">
      <Grid container component="section">
        {!matches && <Grid item md={6} xs={12} className={classes.image} />}
        <Grid item md={6} xs={12} className={classes.info} component="section">
          <Line />
          <Simplebar style={{ height: "100%" }}>
            <BackgroundText>PORTFOLIO</BackgroundText>
            <Box position="relative" className={classes.infoContent}>
              <Box className={classes.portfolio}>
                <Title>My Portfolio</Title>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    {portfolioData
                      .slice(portfolioData.length / 2)
                      .map((item, i) => (
                        <PortfolioItem classes={classes} item={item} key={i} />
                      ))}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    {portfolioData
                      .slice(0, portfolioData.length / 2)
                      .map((item, i) => (
                        <PortfolioItem classes={classes} item={item} key={i} />
                      ))}
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

export default Portfolio;
