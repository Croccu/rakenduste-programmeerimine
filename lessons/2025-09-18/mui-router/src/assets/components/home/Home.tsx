import { Typography, Box, Button } from "@mui/material"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <Typography variant="h4">Home page</Typography>
      <Typography>
          See on rakenduse avaleht. Siit saad navigeerida teistesse lehtedesse.
      </Typography>
      <Box sx={{ mt: 2, display: "flex", gap: 2 , justifyContent: "center" }}>
        <Button variant="contained" color="secondary" component={Link} to="/about">
          About
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/something">
          Something
        </Button>
      </Box>
    </>
  )

}

export default Home
