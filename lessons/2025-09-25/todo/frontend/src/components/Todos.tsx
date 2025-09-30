import { useEffect, useState } from "react";
import { Box, List, ListItem, Stack, Typography, Button } from "@mui/material";
import SubmitTodo from "./SubmitTodo";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const toggleCompleted = async (id: string, completed: boolean) => {
    await fetch("http://localhost:3000/todos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, completed: !completed })
    });
    fetchTodos();
  };

  const deleteTodo = async (id: string) => {
    await fetch("http://localhost:3000/todos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    fetchTodos();
  };

  return (
    <Box>
      <Typography variant="h3">Todos</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => toggleCompleted(todo.id, todo.completed)}
                >
                  {todo.completed ? "Undo" : "Done"}
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </Stack>
            }
          >
            {todo.title} {todo.completed ? "✅" : ""}
          </ListItem>
        ))}
      </List>
      <SubmitTodo fetchTodos={fetchTodos} />
    </Box>
  );
};

export default Todos;
