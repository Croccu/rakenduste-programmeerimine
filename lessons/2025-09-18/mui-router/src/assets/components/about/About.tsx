// src/About.tsx
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  TextField,
  Button,
  Stack,
  Divider,
  Typography,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useLocalStorage } from "../../../hooks/useLocalStorage"

export default function About() {
  const [email, setEmail] = useLocalStorage<string>("about:email", "")
  const [message, setMessage] = useLocalStorage<string>("about:message", "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.info("Submitted:", { email, message })
  }

  const handleReset = () => {
    setEmail("")
    setMessage("")
  }

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 960,
          mx: "auto",
          bgcolor: "#e6e6e6e6",
          borderRadius: 2,
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardHeader title="Rico Paum" sx={{ mb: 1 }} />
        <CardContent>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems={{ xs: "stretch", md: "flex-start" }}
          >
            {/* Vasak: huvid */}
            <Box flex={1} minWidth={0}>
              <Typography variant="h6" gutterBottom>
                Huvid / Hobid
              </Typography>
              <List dense>
                <ListItem>Programmeerimine</ListItem>
                <ListItem>Videomängud</ListItem>
                <ListItem>Kino/Seriaalid</ListItem>
                <ListItem>Tehnoloogia</ListItem>
                <ListItem>Mototehnika</ListItem>
                <ListItem>Militaartarbe robotid</ListItem>
              </List>
            </Box>

            {/* Divider: vertikaalne desktopil, horisontaalne mobiilis */}
            <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />
            <Divider sx={{ display: { xs: "block", md: "none" } }} />

            {/* Parem: kontaktivorm (püsiv) */}
            <Box flex={1} minWidth={0}>
              <Typography variant="h6" gutterBottom>
                Võta minuga ühendust
              </Typography>
              <Stack component="form" onSubmit={handleSubmit} spacing={2}>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
                    "& .MuiOutlinedInput-input": { backgroundColor: "#fff" },
                  }}
                />
                <TextField
                  label="Sõnum"
                  multiline
                  minRows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
                    "& .MuiOutlinedInput-inputMultiline": { backgroundColor: "#fff" },
                  }}
                />
                <Stack direction="row" spacing={1}>
                  <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Saada
                  </Button>
                  <Button type="button" variant="outlined" onClick={handleReset}>
                    Puhasta
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
