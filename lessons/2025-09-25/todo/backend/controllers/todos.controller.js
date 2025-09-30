import { v4 as uuidv4 } from "uuid";

let todos = [
  {
    id: uuidv4(),
    title: "First task",
    completed: false,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false
  }
];

// CREATE
export function create(req, res) {
  const { title } = req.body;

  const newTodo = {
    id: uuidv4(),
    title,
    completed: false,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
}

// READ
export function read(req, res) {
  res.json(todos.filter((t) => !t.deleted));
}

// UPDATE
export function update(req, res) {
  const { id, title, completed } = req.body;
  const todo = todos.find((t) => t.id === id && !t.deleted);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  todo.updatedAt = Date.now();

  res.json(todo);
}

// DELETE (soft)
export function remove(req, res) {
  const { id } = req.body;
  const todo = todos.find((t) => t.id === id && !t.deleted);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.deleted = true;
  todo.updatedAt = Date.now();

  res.status(204).send();
}
