import logo from './logo.svg';
import './App.css';
import { amber, teal } from '@mui/material/colors';
import CustomBtn from "./components/CustomBtn";
import NavBar from "./components/MenuBar";
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import {makeStyles} from "@material-ui/core/styles";
import * as mui from "@material-ui/core/styles";
import image from "./components/MenuBar";
import HookCounter from "./components/AddingFunction";
import image1 from "./background.jpeg";

function App() {

const useStyles = makeStyles({
    root:{
        background:'linear-gradient(45deg,#FE6B8B, #FF8E53',
        backgroundImage:'background.jpeg',
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color:'white',
        padding: '5px 30px'
    }
})
  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: amber
    },
      typography:{
        fontFamily:['sans-serif']
      }
  });
  

  return (
      <ThemeProvider theme={theme}>

      <div className="App">

          <NavBar/>
        <h3>Pizzeria Bella</h3>
        <h4> Making people and pasta!</h4>
          <img src ={require('./pizza2.png').default} width={200} height={120} id={"image"} />
          <HookCounter/>
    </div>
</ThemeProvider>
  );
}

export default App;