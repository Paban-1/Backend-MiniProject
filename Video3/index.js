const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Lima Page");
});

// Middleweare
app.use(function (req, res, next) {
  console.log("Lima middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("Lima middleware two");
  next();
});

// Create Route
app.get("/lima", function (req, res, next) {
  return next(new Error("somthing went wrong :("));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Somthing broke! :(");
});
app.listen(3000);
