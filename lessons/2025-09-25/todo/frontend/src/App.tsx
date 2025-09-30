import { createTheme, CssBaseline, ThemeProvider, Button, Stack } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AdminTodos from "./components/AdminTodos";

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
  const [adminMode, setAdminMode] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="row" spacing={2} sx={{ m: 2 }}>
        <Button
          variant={adminMode ? "outlined" : "contained"}
          onClick={() => setAdminMode(false)}
        >
          Todos
        </Button>
        <Button
          variant={adminMode ? "contained" : "outlined"}
          onClick={() => setAdminMode(true)}
        >
          Admin
        </Button>
      </Stack>

      {adminMode ? <AdminTodos /> : <Todos />}
    </ThemeProvider>
  );
}

export default App;
