import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import SubmitCat from "./SubmitCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const res = await fetch("http://localhost:3000/cats");
    const data = await res.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", p: 2 }}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" sx={{ mb: 2 }}>
          Cats
        </Typography>

        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <CatsList cats={cats} fetchCats={fetchCats} />
        </Paper>

        <Paper elevation={3} sx={{ p: 2 }}>
          <SubmitCat fetchCats={fetchCats} />
        </Paper>
      </Container>
    </Box>
  );
};

type CatsListProps = { cats: Cat[]; fetchCats: () => void };

const CatsList: React.FC<CatsListProps> = ({ cats, fetchCats }) => {
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const startEdit = (id: string, currentName: string) => {
    setEditId(id);
    setEditName(currentName);
  };

  const saveEdit = async () => {
    if (!editId) return;
    await fetch("http://localhost:3000/cats", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: editId, name: editName }),
    });
    setEditId(null);
    setEditName("");
    fetchCats();
  };

  const deleteCat = async (id: string) => {
    await fetch("http://localhost:3000/cats", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchCats();
  };

  return (
    <List dense sx={{ p: 0 }}>
      {cats.map((cat, idx) => (
        <React.Fragment key={cat.id}>
          <ListItem
            sx={{
              py: 1,
              px: 0,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {editId === cat.id ? (
              <Stack direction="row" alignItems="center" sx={{ width: "100%" }} spacing={1}>
                <TextField
                  size="small"
                  fullWidth
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <Button variant="contained" size="small" onClick={saveEdit}>
                  Save
                </Button>
                <Button size="small" onClick={() => setEditId(null)}>
                  Cancel
                </Button>
              </Stack>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "100%" }}
              >
                <ListItemText primary={cat.name} />
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => startEdit(cat.id, cat.name)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => deleteCat(cat.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </Stack>
            )}
          </ListItem>
          {idx < cats.length - 1 && <Divider sx={{ my: 0.5 }} />}
        </React.Fragment>
      ))}
      {cats.length === 0 && (
        <Typography color="text.secondary" align="center" sx={{ py: 2 }}>
          No cats yet — add one below.
        </Typography>
      )}
    </List>
  );
};

export default Cats;
