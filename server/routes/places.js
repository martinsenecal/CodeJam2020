//Everything related to Google Maps API
const express = require('express');
require('express-async-errors');

//  Import controllers
const {
  getPlaceDetails,
  getPlaces,
  getPlacePicture,
} = require('../controllers/places');

const placesRouter = express.Router();

// @route    Get api/session
// @desc     Get details of a restaurant
// @access   Public
placesRouter.get('/getDetailsRestaurant/:id', getPlaceDetails);

// @route    Get api/session
// @desc     Get list of restaurants
// @access   Public
placesRouter.get('/getListRestaurant', getPlaces);

// @route    Get api/session
// @desc     Get Picture of Maps
// @access   Public
placesRouter.get('/getPictureMaps/:id', getPlacePicture);

module.exports = placesRouter;
