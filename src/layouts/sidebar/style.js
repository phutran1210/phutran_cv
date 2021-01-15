import { makeStyles } from "@material-ui/core";

const icon = theme => ({
  color: theme.palette.text.secondary,
  fontSize: 22,
  margin: theme.spacing(2, 0),
  display: "block",
  textDecoration: "none",
  textAlign: "center",
  "&:hover": {
    color: theme.palette.text.primary,
    cursor: "pointer"
  }
});
const useStyle = makeStyles(theme => ({
  sidebar: {
    width: 50,
    height: "100%",
    background: theme.palette.common.black,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 50,
      flexDirection: "row"
    }
  },
  sidebarSection: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center"
    }
  },
  logo: {
    height: 58,
    lineHeight: "58px",
    background: theme.palette.secondary.main,
    position: "relative",
    textAlign: "center",
    "& span": {
      fontWeight: "bold",
      fontFamily: "Cormorant Garamond",
      position: "relative",
      zIndex: 2
    },
    "&::after": {
      content: "''",
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg,rgba(0,0,0,.5) 0,rgba(0,0,0,0) 100%)",
      position: "absolute",
      top: 0,
      left: 0
    },
    [theme.breakpoints.down("sm")]: {
      width: 50,
      height: "100%"
    }
  },
  icon: {
    ...icon(theme),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1)
    }
  },
  smallIcon: {
    ...icon(theme),
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 1)
    }
  },
  activeLink: {
    color: `${theme.palette.secondary.main} !important`
  },
  smMenu: {
    display: "flex",
    alignItems: "center"
  },
  bars: {
    background: "#202020",
    height: "100%",
    width: 50,
    textAlign: "center",
    "& i": {
      color: theme.palette.text.secondary,
      fontSize: 30,
      lineHeight: "50px"
    }
  },
  customMenu: {
    position: "absolute",
    width: "100%",
    top: 50,
    left: 0,
    paddingRight: theme.spacing(5),
    background: "#202020",
    "& a": {
      margin: theme.spacing(1.2, 1)
    }
  }
}));
export default useStyle;
