import { useState } from 'react'
import './App.css'
import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/something">Something</Button>
        </nav>
        <hr />
        <Outlet />
      </div>
      <div className="card" style={{display: 'flex', gap: '10px', alignItems: 'center', flexDirection: 'column', marginTop: '20px'}}>
        <Button onClick={() => setCount((count) => count + 1)} variant="outlined" color="primary">
          count is {count}
        </Button>
        <Button onClick={() => setCount(0)} variant="outlined" color="error">Reset</Button>
      </div>
    </>
  )
}

export default App
