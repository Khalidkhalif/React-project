import './App.css';
import { ThemeProvider } from '@emotion/react';
import { amber, teal } from '@mui/material/colors';
import { createTheme } from '@mui/system';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Checkout from './pages/checkout';


function App() {

  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: amber
    }
  });
  

  return (
    <>
      <ThemeProvider theme={theme}>
      <div className="App">
        
      </div>
    </ThemeProvider>




    
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/menu' element={<Menu/>} /> 
            <Route exact path='/checkout' element={<Checkout/>} /> 
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
