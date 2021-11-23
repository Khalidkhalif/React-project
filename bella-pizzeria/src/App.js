import './App.css';
import { ThemeProvider } from '@emotion/react';
import { green, blue } from '@mui/material/colors';
import { createTheme } from '@mui/system';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Checkout from './pages/checkout';
import ShoppingCart from './pages/shoppingcart';
import Navbar from './components/Navbar';
import ThankYou from './pages/thankyou';

import React from "react";
import { Container } from '@material-ui/core';





const App = () =>   {

  const theme = createTheme({
    palette: {
      primary: blue,
      secondary: green
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
            <Route exact path='/menu' element={<Menu/>} /> 
            <Route exact path='/checkout' element={<Checkout/>} /> 
            <Route exact path='/shoppingcart' element={<ShoppingCart/>} />
            <Route exact path='/thankyou' element={<ThankYou/>} />
          </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;