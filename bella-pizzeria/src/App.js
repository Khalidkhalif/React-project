import logo from './logo.svg';
import './App.css';

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
        
      </div>
    </ThemeProvider>
  );
}

export default App;

export default App;
