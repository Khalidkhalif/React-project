import logo from './logo.svg';
import './App.css';
import { amber, teal } from '@mui/material/colors';
import CustomBtn from "./components/CustomBtn";

import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import {makeStyles} from "@material-ui/core/styles";
import HookCounter from "./components/AddingFunction";
import ActionAreaCard from "./components/CardContent";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home";

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
         <Router>
          <Home/>

         </Router>
        <h3>Pizzeria Bella</h3>
        <h4> Making people and pasta!</h4>
          <ActionAreaCard/>
          <HookCounter/>
    </div>
</ThemeProvider>
  );
}

export default App;