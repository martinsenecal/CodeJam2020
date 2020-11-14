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

//Get Details of a specific restaurant
placesRouter.get('/getDetailsRestaurant/:id', getPlaceDetails);

//Get List of Restaurants with a query
placesRouter.get('/getListRestaurant', getPlaces);

//Get API Picture
placesRouter.get('/getPictureMaps/:id', getPlacePicture);

module.exports = placesRouter;
