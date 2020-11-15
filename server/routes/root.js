const express = require("express");
require("express-async-errors");

//  Import routers
const rootRouter = express.Router();
const apiRouter = express.Router();

const sessionRouter = require("./session");
const choiceRouter = require("./choices");

apiRouter.use("/session", sessionRouter);
apiRouter.use("/choice", choiceRouter);
rootRouter.use("/api", apiRouter);

module.exports = rootRouter;
