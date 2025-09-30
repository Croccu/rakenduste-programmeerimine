import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import Todos from './components/Todos';



const theme = createTheme({
    palette: {
    mode: "light",
    background: {
      default: "#f5f5f5", // page background
      paper: "#ffffff",   // cards/forms background
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#d32f2f",
    },
    success: {
      main: "#2e7d32",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none", // disable ALL CAPS
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize/reset styles across browsers */}
      <Todos />
    </ThemeProvider>
  );
}

export default App
