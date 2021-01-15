import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#181818",
      white: "#fff"
    },
    background: {
      paper: "rgba(255,255,255,.05)",
      default: "linear-gradient(135deg,#1d1e21 0,#3e4246 100%)",
    },
    secondary: {
      main: "#ee534f",
      contrastText: "#fff"
    },
    text: {
      primary: "#ffffff",
      secondary: "#a9a9a9",
      hint: "#ffffff"
    }
  },
  typography: {
    h1: {
      fontSize:66
    },
    subtitle1: {
        fontSize: 20
    },
    h2: {
      fontSize: 23,
    },
    h3:{
        fontSize: 20
    },
    h4: {
        fontSize: 16
    },
    body1: {
      fontSize: 15,
    },
    body2: {
        fontSize: 12,
    },
    fontFamily: `'Poppins', sans-serif`
  },
  spacing: 10
});
