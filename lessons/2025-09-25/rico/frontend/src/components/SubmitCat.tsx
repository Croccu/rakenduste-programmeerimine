import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitCatProps = {
  fetchCats: () => void;
};

const SubmitCat = ({ fetchCats }: SubmitCatProps) => {
  const [name, setName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim()) return;

    try {
      const response = await fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        console.warn("Failed to add cat");
        return;
      }

      setName("");        // clear input
      fetchCats();        // reload cats immediately
    } catch (error) {
      console.error("Error adding cat:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          label="Cat name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        <Button variant="contained" color="success" type="submit">
          Add
        </Button>
      </Stack>
    </Box>
  );
};

export default SubmitCat;
