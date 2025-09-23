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
      <Card sx={{ minWidth: 1200, minHeight: 400, mx: "auto", bgcolor: "#e6e6e6e6", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
        <CardHeader title="Rico Paum" sx={{mb: "20px"}} />
        <CardContent>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems={{ xs: "stretch", md: "flex-start" }}
          >
            <Box flex={1}>
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

            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", md: "block" } }}
            />

            <Box flex={1}>
              <Typography variant="h6" gutterBottom>
                Võta minuga ühendust
              </Typography>
              <Stack component="form" onSubmit={(e) => e.preventDefault()} spacing={2}>
                <TextField label="Email" type="email" sx={{"& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
                  "& .MuiOutlinedInput-inputMultiline": { backgroundColor: "#fff" },}} fullWidth />
                <TextField label="Sõnum" multiline minRows={3}   sx={{"& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
                  "& .MuiOutlinedInput-inputMultiline": { backgroundColor: "#fff" },}} fullWidth />
                <Button type="submit" variant="contained" endIcon={<SendIcon />} >Saada!</Button>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
