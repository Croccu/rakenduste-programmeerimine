const express = require("express");
const cors = require("cors");
const todosRoutes = require("./routes/todos.routes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/todos", todosRoutes);

app.get("/", (req, res) => {
  res.send("TODO API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
