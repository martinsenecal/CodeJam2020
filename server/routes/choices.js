const choiceRouter = require("express").Router();
const { getChoice } = require("../controllers/choices");

choiceRouter.get("/", getChoice);

module.exports = choiceRouter;
