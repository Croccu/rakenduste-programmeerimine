import { Stack, Typography, List, ListItem } from "@mui/material"

export default function Something() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Something</Typography>
      <Typography>
        Väike kirjeldus: siia võid hiljem lisada oma sisu või demo.
      </Typography>
      <List>
        <ListItem>Esimene punkt</ListItem>
        <ListItem>Teine punkt</ListItem>
        <ListItem>Kolmas punkt</ListItem>
      </List>
    </Stack>
  )
}
