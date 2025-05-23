const express = require("express");
var courses = require("./model/course.model");
var cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.static("static"));
app.use(express.json()); // to read the json data from request and populate req.body property !
// app.get("/", (req, res) => {
//   res.sendFile("Courses.html", { root: __dirname });
// });
// app.get("/script.js", (req, res) => {
//   res.sendFile("script.js", { root: __dirname });
// });

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/newcourse", (req, res) => {
  let courseToBeAdded = req.body;
  courses.push(courseToBeAdded);
  res.json({ msg: "success", courses });
});

app.delete("/courses/delete/:id", (req, res) => {
  let courseId = +req.params.id;
  console.log("Deleting.." + courseId);
  // filter
  courses = courses.filter(course => course.id !== courseId); // in db !
  console.log(courses);
  res.json({ msg: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
