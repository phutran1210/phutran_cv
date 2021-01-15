import { makeStyles } from "@material-ui/core";
import BackgroundImg from "../../assets/img/bg.jpg";
const useStyle = makeStyles(theme => ({
  home: {
    backgroundImage: `url(${BackgroundImg}) `,
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: theme.palette.text.primary,
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      top: 0,
      left: 0
    }
  },
  content: {
    position: "relative",
    top: -40,
    zIndex: 2
  },
  name: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    "& span:first-child": {
      opacity: 0.5
    },
    "& span": {
      lineHeight: "80px"
    }
  },
  job: {
    height: 25,
    "& span:first-child": {
      opacity: 0.7,
      fontWeight: 400
    },
    "& span:last-child": {
      opacity: 0.7,
      animation: '$flash 1s linear 0s 100'
    }
  },
  "@keyframes flash": {
    "0%": {},
    "50%": { opacity: 0 },
    "100%": { opacity: 0.7 }
  }
}));
export default useStyle;
