import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Box,
  Typography,
  Zoom,
  Tooltip,
  useMediaQuery,
  Fade
} from "@material-ui/core";
import useStyle from "./style";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const Icon = withRouter(
  ({
    title = "",
    classname = "",
    iconName = "",
    path = "",
    activeClass = "",
    setLoading,
    history,
    location
  }) => {
    return (
      <Tooltip TransitionComponent={Zoom} title={title} placement="left-start">
        <Typography
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              history.push(path);
            }, 1000);
          }}
          className={clsx(
            classname,
            location.pathname === path ? activeClass : ""
          )}
        >
          <i className={`fa fa-${iconName}`} />
        </Typography>
      </Tooltip>
    );
  }
);

const Menu = ({ classes = {}, setLoading, ...props }) => {
  return (
    <Box {...props}>
      <Icon
        title="Home"
        classname={classes.icon}
        activeClass={classes.activeLink}
        path="/"
        iconName="home"
        setLoading={setLoading}
      />
      <Icon
        title="About"
        activeClass={classes.activeLink}
        path="/about"
        classname={classes.icon}
        iconName="user"
        setLoading={setLoading}
      />
      <Icon
        title="Resume"
        activeClass={classes.activeLink}
        path="/resume"
        classname={classes.icon}
        iconName="cog"
        setLoading={setLoading}
      />
      <Icon
        title="Portfolio"
        activeClass={classes.activeLink}
        path="/portfolio"
        classname={classes.icon}
        iconName="eye"
        setLoading={setLoading}
      />
      <Icon
        title="Contact"
        classname={classes.icon}
        activeClass={classes.activeLink}
        path="/contact"
        iconName="envelope"
        setLoading={setLoading}
      />
    </Box>
  );
};

const SmMenu = ({ classes, setLoading }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Box className={classes.smMenu}>
      <div className={classes.bars} onClick={() => setShowMenu(!showMenu)}>
        <i className="fa fa-bars" />
      </div>
      <Fade in={showMenu}>
        <Box className={classes.customMenu} zIndex="5">
          <Menu
            classes={classes}
            setLoading={setLoading}
            display="flex"
            justifyContent="flex-end"
          />
        </Box>
      </Fade>
    </Box>
  );
};

const Sidebar = ({ setLoading }) => {
  const classes = useStyle();
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box className={classes.sidebar}>
      <Box className={classes.sidebarSection}>
        <div className={classes.logo}>
          <Typography variant="h2" component="span" color="textPrimary">
            P
          </Typography>
        </div>
        {mdMatch && <Menu classes={classes} setLoading={setLoading} />}
      </Box>
      <Box className={classes.sidebarSection}>
        <Tooltip
          TransitionComponent={Zoom}
          title={"Facebook"}
          placement="left-start"
        >
          <a
            className={classes.smallIcon}
            target="__blank"
            href="https://www.facebook.com/phutran.121094/"
          >
            <i className="fa fa-facebook" />
          </a>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title={"Tap to send mail"}
          placement="left-start"
        >
          <a
            className={classes.smallIcon}
            href="mailto:phutran121094@gmail.com"
          >
            <i className="fa fa-google" />
          </a>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title={"Tap to call"}
          placement="left-start"
        >
          <a
            className={classes.smallIcon}
            target="__blank"
            href="tel:0779066669"
          >
            <i className="fa fa-phone" />
          </a>
        </Tooltip>
        {!mdMatch && <SmMenu classes={classes} setLoading={setLoading} />}
      </Box>
    </Box>
  );
};

export default Sidebar;
