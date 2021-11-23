import './App.css';
import { ThemeProvider } from '@emotion/react';
import { amber, teal } from '@mui/material/colors';
import { createTheme } from '@mui/system';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/thisismenu';
import Checkout from './pages/checkout';
import ShoppingCart from './pages/shoppingcart';
import Navbar from './components/Navbar'

import React, {useState} from "react";
import items from './components/Data';
import { Container, Grid, makeStyles } from '@material-ui/core';
import backgroundImage from './images/background.jpeg'


const App = () =>   {

  const [menuItems] = useState(items);

  /*const useStyles = makeStyles({
    root:{
        background:'linear-gradient(45deg,#FE6B8B, #FF8E53',
        backgroundImage: 'images/background.jpeg',
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color:'white',
        padding: '5px 30px',
    }
})*/

  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: amber
    }
  });
  

  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      
      <Container className="App">
          
      </Container>
      

    </ThemeProvider>

        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/thisismenu' element={<Menu/>} /> 
            <Route exact path='/checkout' element={<Checkout/>} /> 
            <Route exact path='/shoppingcart' element={<ShoppingCart/>} />
          </Routes>
        </BrowserRouter>
        
    </>

  );
//<Route exact path='/' element={<Home/>} />
}

export default App;