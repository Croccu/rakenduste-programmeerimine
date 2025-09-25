const express = require('express');
const app = express();
const PORT = 3000;

const catsRoutes = require("./routes/cats.routes");

app.use(express.json());

app.use("/cats", catsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
