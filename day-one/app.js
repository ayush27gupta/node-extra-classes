const express = require("express");

//Creating the server
const app = express();
const port = 8000;
//Creating End-Points  --> Route is URL's end-point

//Example :::: Url==> http://www.website.com/about
// above given is the url , in this url /about is the route.
app.get("/user", (req, res) => {
  const user = { name: "Ayush" };
  const text = "Random text";
  const html = "<h1>Hi</h1>";
//   res.send(JSON.stringify(user));
//   res.send(text);
  res.send(html);
});

//Listening to port
app.listen(port, () => {
  console.log("Application started at http://localhost:8000");
});
