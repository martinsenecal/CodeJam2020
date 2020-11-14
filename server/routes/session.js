const express = require("express")
require("express-async-errors")

//  Import controllers
const { getSession, postSession } = require("../controllers/session")

const sessionRouter = express.Router();

sessionRouter.get("/:id", getSession);
sessionRouter.post("/", postSession);

module.exports = sessionRouter;