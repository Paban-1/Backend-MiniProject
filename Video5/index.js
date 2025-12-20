// Require express & path
const express = require("express");
const path = require("path");
// initial expressas app
const app = express();

// Handing form with persers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

// Dinamic routing
app.get("/profile/:userName", function (req, res) {
  res.send(`Welcome, ${req.params.userName}`);
});

app.get("/profile", function (req, res) {
  res.render("Profile");
});

app.get("/author/:userName/:age", function (req, res) {
  res.send(`Welcome, ${req.params.userName} of age: ${req.params.age}`);
});

app.listen(3000, function () {
  console.log("Port is running at : 3000");
});
