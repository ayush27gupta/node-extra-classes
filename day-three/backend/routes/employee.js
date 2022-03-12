const express = require("express");
const { employeeGet } = require("../controllers/employee");
const employeeRouter = express.Router();

employeeRouter.get("/details", employeeGet);

module.exports = employeeRouter;
