//Cors is a library that helps to connect or communicate two different
//applications runnning on different origins

const express = require("express");
const cors = require("cors");
const router = require("./routes");


const app = express();
app.use(cors());

app.use("/api", router);

app.listen(80, () => {
  console.log("Application started at htp://localhost");
});
