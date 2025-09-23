import './App.css'
import { AppBar, Toolbar, Button, Container } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{
          bgcolor: "#e6e6e6e6",
          color: "text.primary",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/something">
            Something
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default App
