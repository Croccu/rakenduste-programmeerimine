import { Box, List, ListItem, Typography, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat.tsx";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3000/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h1">Cats</Typography>
      <CatsList cats={cats} fetchCats={fetchCats}/>
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

type CatsListProps = {
  cats: Cat[];
  fetchCats: () => void;
};

const CatsList: React.FC<CatsListProps> = ({ cats, fetchCats }) => {
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const deleteCat = async (id: string) => {
    await fetch("http://localhost:3000/cats", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchCats();
  };

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

  return (
    <List>
      {cats.map((cat) => (
        <ListItem key={cat.id}>
          {editId === cat.id ? (
            <Stack direction="row" spacing={1}>
              <TextField
                size="small"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <Button variant="contained" onClick={saveEdit}>
                Save
              </Button>
              <Button onClick={() => setEditId(null)}>Cancel</Button>
            </Stack>
          ) : (
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>{cat.name}</Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => startEdit(cat.id, cat.name)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteCat(cat.id)}
              >
                Delete
              </Button>
            </Stack>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default Cats;
