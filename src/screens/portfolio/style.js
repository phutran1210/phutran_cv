import { makeStyles } from "@material-ui/core";
import Avatar1 from "../../assets/img/img-1.jpg";
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
  portfolioItem: {
    cursor: "pointer",
    marginBottom: theme.spacing(3),
    borderRadius: 15,
    overflow: "hidden",
    "& $portfolioImage": {
      overflow: "hidden",
      position: "relative",
      "& $overlay": {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(238,83,79,0.5)",
        transition: "all 0.3s",
        opacity: 0,
        zIndex: 2,
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& i": {
          fontSize: 40
        }
      },
      "&:hover $overlay": {
        opacity: 1
      }
    },
    "& img": {
      width: "100%",
      transition: "all 0.3s"
    },
    "&:hover img": {
      transform: "scale(1.1)"
    },

    "& $detail": {
      background: theme.palette.background.paper,
      textAlign: "center",
      padding: theme.spacing(1.5),
      fontWeight: 200,
      "& h4": {
        fontWeight: "bold",
        marginBottom: theme.spacing(0.7)
      }
    }
  },
  detail: {},
  portfolioImage: {},
  overlay: {},
  image: {
    background: `url(${Avatar1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    [theme.breakpoints.down("md")]: {
      height: 500
    }
  }
}));
export default useStyle;
