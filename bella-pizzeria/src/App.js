import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { amber, teal } from '@mui/material/colors';
import { createTheme } from '@mui/system';
import CheckoutPage from './pages/checkout';

function App() {

  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: amber
    }
  });
  

  return (
  
      <div className="App">
        <CheckoutPage/>
      </div>
    
    
  );
}

export default App;
