const { Router } = require("express");
const Joi = require("Joi"); // schema description language and data validator

const express = require("express");
const router = express.Router();

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
  ];

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("there is no course with given id ");
  res.send(course);
});

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body); //obj destructuring

  if (error) return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  //look up for the course
  //if not existing,return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("there is no course with given id ");
  //validate
  //if invalid, return 400 - bad request

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(result.error.details[0].message);

  //update course
  course.name = req.body.name;
  res.send(course);
  //return the updated course
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

/*app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params); //route parameters
  });*/
router.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("there is no course with given id ");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

module.exports = router;
