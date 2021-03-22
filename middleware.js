const Joi = require("Joi"); // schema description language and data validator
const express = require("express");
const app = express();
const logger = require("./middleware/logger");




app.use(express.json());

app.use(logger); //custom middleware function 

