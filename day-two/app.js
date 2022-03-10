//Express

//Express is web application framework that helps us in backend applications to create routes easily

//Middleware
//it is used to run some functionality before the routes get hit

const express = require("express");

const app = express();
const port = 80;

//Middleware creation
const middleware1 = (req, res, next) => {
  console.log("This is middleware 1");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("This is middleware 2");
  next();
};

//Using middleware
app.use(middleware1);

//End-points
app.get("/greet", (req, res) => {
  res.send("Holla Amigos");
});
app.get("/greet2", middleware2, (req, res) => {
  res.send("Konnichiwa");
});

//Starting server
app.listen(port, () => {
  console.log("Application started on http://localhost");
});
