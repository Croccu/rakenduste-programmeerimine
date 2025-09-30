import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

type SubmitTodoProps = {
  fetchTodos: () => void;
};

const SubmitTodo = ({ fetchTodos }: SubmitTodoProps) => {
  const [title, setTitle] = useState("");

  const submitTodo = async () => {
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    fetchTodos();
    setTitle("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      submitTodo();
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="New Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitTodo;
