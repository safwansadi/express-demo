const Joi = require("Joi"); // schema description language and data validator
const express = require("express");
const app = express();
const logger = require("./logger");

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
