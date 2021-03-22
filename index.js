const helmet = require("helmet");
const express = require("express");
const app = express();
const morgan = require("morgan"); //log the http request
const config = require("config");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");

const courses = require("./routes/courses");
const home = require("./routes/home");
const logger = require("./middleware/logger");


//console.log(`environment:${app.get("env")}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //read static file
app.use(helmet());
app.use("/api/courses", courses); //any routes that start with /api/courses use this router
app.use("/", home);
app.set("view engine", "pug");
app.set("views", "./views");
app.use(logger);
//configuration
console.log("App Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("morgan enabled");
}
//Db work
dbDebugger("connected to the databese");
app.get("/", (req, res) => {
  res.render("index", { title: "my express app", message: "hello world" });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
