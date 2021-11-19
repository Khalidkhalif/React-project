import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { amber, teal } from '@mui/material/colors';
import { createTheme } from '@mui/system';

function App() {

  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: amber
    }
  });
  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>App.js, just a hub for the other pages</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
