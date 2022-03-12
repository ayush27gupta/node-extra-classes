const express = require("express");
const employeeRouter = require("./employee");
const router = express.Router();

router.use("/employee", employeeRouter);

module.exports = router;
