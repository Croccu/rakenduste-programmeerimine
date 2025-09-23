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

export default function Home() {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 960,
          mx: "auto",
          bgcolor: "#e6e6e6e6",
          borderRadius: 2,
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
        }}
      >
        <CardHeader title="Rico Paum" sx={{ mb: 1 }} />

        <CardContent>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems={{ xs: "stretch", md: "flex-start" }}
          >
            {/* Left: hobbies */}
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

            {/* Divider: vertical on md+, horizontal on mobile */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", md: "block" } }}
            />
            <Divider sx={{ display: { xs: "block", md: "none" } }} />

            {/* Right: contact form */}
            <Box flex={1} minWidth={0}>
              <Typography variant="h6" gutterBottom>
                Võta minuga ühendust
              </Typography>

              <Stack component="form" onSubmit={(e) => e.preventDefault()} spacing={2}>
                <TextField
                  label="Email"
                  type="email"
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
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
                    "& .MuiOutlinedInput-inputMultiline": { backgroundColor: "#fff" },
                  }}
                />
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                  Saada
                </Button>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
