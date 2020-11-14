require('express-async-errors');

//Import Models
const Restaurant = require('../models/Restaurant');
const Restaurants = require('../models/Restaurants');

const getPlaces = async (req, res, next) => {
  //How to see this api: http://localhost:5000/api/session
  try {
    res.send('hello world');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getPlaceDetails = async (req, res, next) => {};

module.exports = { getPlaceDetails, getPlaces };
