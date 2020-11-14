//Everything related to Google Maps API
const express = require('express');
require('express-async-errors');

//  Import controllers
const { getPlaceDetails, getPlaces } = require('../controllers/places');

const placesRouter = express.Router();

placesRouter.get('/', getPlaceDetails);
placesRouter.get('/', getPlaces);

module.exports = placesRouter;
