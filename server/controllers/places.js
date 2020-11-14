require('express-async-errors');

const getPlaces = async (req, res, next) => {
  res.send('Hello World!');
  //How to see this api: http://localhost:5000/api/session
};

const getPlaceDetails = async (req, res, next) => {};

module.exports = { getPlaceDetails, getPlaces };
