import express from "express";
import cors from "cors";

import { todosRouter } from "./routes/todos.routes.js";
import { authRouter } from "./routes/auth.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/todos", todosRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("TODO API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
