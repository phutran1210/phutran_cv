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
  infoDetail: {
    width: "70%",
    margin: "auto",
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: '90%'
    },
    "& p": {
      lineHeight: 1.7,
      fontWeight: 200,
    },
    "& span": {
      fontWeight: "bold",
      color: theme.palette.secondary.main
    }
  },
  control: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    "& $controlIcon": {
      width: 44,
      height: 44,
      display: "inline-block",
      background: theme.palette.background.paper,
      borderRadius: "50%",
      lineHeight: "44px",
      color: theme.palette.text.primary,
      fontSize: 19,
      ...controlStyle(theme)
    }
  },
  controlIcon: {},
  btnDownload: {
    background: theme.palette.background.paper,
    padding: theme.spacing(1, 2),
    color: theme.palette.text.primary,
    border: "none",
    borderRadius: "200px",
    display: "flex",
    alignItems: "center",
    ...theme.typography.h4,
    "& i": {
      marginRight: theme.spacing(1),
      fontSize: 19
    },
    ...controlStyle(theme)
  },
  hobbies: {
    padding: theme.spacing(0, 3)
  },
  hobby: {
    background: theme.palette.background.paper,
    padding: theme.spacing(3, 2.5),
    height: 230,
    borderRadius: 15,
    "& > i": {
      color: theme.palette.secondary.main,
      fontSize: 50
    },
    "& h4": {
      fontWeight: "bold",
      margin: theme.spacing(1.5, 0)
    }
  },
  image: {
    background: `url(${Avatar1})`,
    backgroundSize: "cover",
    // objectFit: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    [theme.breakpoints.down("md")]: {
      height: 500
    }
  }
  // image:{
  //   backgroundColor: "black",
  // }
}));
export default useStyle;
