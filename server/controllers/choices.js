const Restaurant = require('../models/Restaurant');
const { getPlaceDetails, getPlacePicture } = require('./places');
require('express-async-errors');

//get?sessionId=...

//get pictures and resto details from places.js
const getChoice = async (req, res, next) => {};

module.exports = { getChoice };
