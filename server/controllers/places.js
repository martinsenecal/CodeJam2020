require('express-async-errors');

const { request } = require('express');
//Import Models
const Restaurant = require('../models/Restaurant');
const Restaurants = require('../models/Restaurants');

//Google Maps API -> to be used with
const getPlaces = async (req, res, next) => {
  try {
    const options = {
      uri: `todo`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);
      if (response.statusCode != 200) {
        return res.status(404).json({ msg: 'Problem with the request' });
      }

      //Body will be the JSON containing all the data
      const parsedJSON = JSON.parse(body);

      //Parse JSON into DB for Restaurants
      for (obj in parsedJSON.results) {
        const newRestaurant = new Restaurants({
          place_id: obj.place_id,
          company: obj.name,
        });

        const resto = await newRestaurant.save();
      }

      res.json(parsedJSON); 
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
};

//Get Restaurant Details for 1 Specific place
const getPlaceDetails = async (req, res, next) => {
  
};

module.exports = { getPlaceDetails, getPlaces };
