const express = require('express');
require('express-async-errors');

//  Import routers
const rootRouter = express.Router();
const apiRouter = express.Router();

const sessionRouter = require('./session');
const placesRouter = require('./places');

apiRouter.use('/session', sessionRouter);
apiRouter.use('/places', placesRouter);

rootRouter.use('/api', apiRouter);

module.exports = rootRouter;
