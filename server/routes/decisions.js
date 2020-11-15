const decisionRouter = require("express").Router();
const { postDecision } = require("../controllers/decisions");

decisionRouter.post("/", postDecision);

module.exports = decisionRouter;
