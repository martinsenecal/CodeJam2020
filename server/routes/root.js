const express = require("express")
require("express-async-errors")

//  Import routers
const rootRouter = express.Router();
const apiRouter = express.Router();
const sessionRouter = require("./session")

apiRouter.use("/session", sessionRouter);

rootRouter.use("/api", apiRouter);

module.exports = rootRouter;