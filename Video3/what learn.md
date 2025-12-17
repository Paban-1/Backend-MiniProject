##### Date -> 17-12-2025

# Introduction to express.js

-> express js is a freamwork.

# what is fremwork ?

-> fremwork give us a flow to work.

# What express done ?

-> Manage everything from the request and giving the response.

# Setting up a basic express application.

-> npm i express

# Middleware ?

-> IS a middle person that do somthing before a task

# Error Handling ?
-> app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Somthing broke! :(");
});