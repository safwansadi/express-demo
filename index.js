const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 4, 5, 7, 8, 78]);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params); //route parameters
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
