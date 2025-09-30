import { Box, List, ListItem, Typography, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const AdminTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos/admin/all");
    const data = await response.json();
    setTodos(data);
  };

  const toggleDeleted = async (id: string) => {
    await fetch("http://localhost:3000/todos/admin/toggle", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box>
      <Typography variant="h3">Admin Todos</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => toggleDeleted(todo.id)}
                >
                  {todo.deleted ? "Restore" : "Soft Delete"}
                </Button>
              </Stack>
            }
          >
            {todo.title} {todo.deleted ? "(deleted)" : ""}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminTodos;
