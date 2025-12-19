const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Lima Page");
});

// Create Route
app.get("/profile", function (req, res) {
  res.send("Page Profile");
});

app.get("/lima", function (req, res, next) {
  return next(new Error("somthing went wrong :("));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Somthing broke! :(");
});
app.listen(3000);
