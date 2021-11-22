import './App.css';
import { ThemeProvider } from '@emotion/react';
import { amber, teal } from '@mui/material/colors';
import { createTheme } from '@mui/system';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Checkout from './pages/checkout';
import ShoppingCart from './pages/shoppingcart';
import Navbar from './components/Navbar'


function App() {

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
      <div className="App">
        
      </div>
    </ThemeProvider>




        <Navbar />
        
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/menu' element={<Menu/>} /> 
            <Route exact path='/checkout' element={<Checkout/>} /> 
            <Route exact path='/shoppingcart' element={<ShoppingCart/>} />
          </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;
