import { makeStyles } from "@material-ui/core";
import Avatar1 from "../../assets/img/img-1.png";
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
    padding: theme.spacing(3),
    "& > div:last-child": {
      marginTop: theme.spacing(9)
    }
  },
  infoDetail: {
    width: "70%",
    height: 100
  },
  getInTouch: {
    background: theme.palette.background.paper,
    padding: theme.spacing(0, 1.5),
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    height: 100,
    "& > i": {
      color: theme.palette.secondary.main,
      fontSize: 45,
      marginRight: theme.spacing(1.5)
    },
    "& h4": {
      fontWeight: "bold",
      marginBottom: theme.spacing(0.5)
    }
  },
  image: {
    background: `url(${Avatar1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  textField: {
    width:'100%',
    display:'block',
    paddingBottom:theme.spacing(2),
    border:'none',
    borderBottom: '1px solid #777',
    fontSize:15,
    background: 'transparent',
    fontFamily: `'Poppins', sans-serif`,
    color:theme.palette.text.primary,
    outline:0,
    '&::placeholder': {
      fontFamily: `'Poppins', sans-serif`
    }
  },
  message:{
    marginTop:theme.spacing(2)
  },
  btnSubmit: {
    background: 'transparent',
    color: theme.palette.text.primary,
    border: 'none',
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
    outline:'none',
    '& i': {
      fontSize: 20,
      marginLeft: theme.spacing(1),
      transition: 'all 0.3s'
    },
    '&:hover i': {
      transform: 'translateX(5px)'
    }
  }
}));
export default useStyle;
