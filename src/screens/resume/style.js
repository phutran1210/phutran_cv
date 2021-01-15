import { makeStyles } from "@material-ui/core";
import Avatar2 from "../../assets/img/img-1.jpg";
const controlStyle = theme => ({
  boxShadow: "0 0 25px rgba(0,0,0,.2)",
  cursor: "pointer",
  margin: theme.spacing(0.7),
  "&:hover": {
    color: theme.palette.secondary.main
  }
});
const useStyle = makeStyles(theme => ({
  info: {
    background: theme.palette.background.default,
    position: "relative",
    paddingBottom: 0
  },
  infoContent: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    },
    padding: theme.spacing(3),
    "& > div:last-child": {
      marginTop: theme.spacing(9)
    }
  },
  resumeContent: {
    background: theme.palette.background.paper,
    borderRadius: 15,
    boxShadow: "0 15px 55px rgba(0,0,0,.3)"
  },
  resumeItem: {
    padding: theme.spacing(2),
    "& h4": {
      marginBottom: theme.spacing(0.5)
    },
    "& span": {
      color: "#777"
    },
    "& p": {
      marginTop: theme.spacing(1)
    }
  },
  image: {
    background: `url(${Avatar2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      height: 500
    }
  }
}));
export default useStyle;
