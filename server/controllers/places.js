require("express-async-errors");
const request = require("request");
const config = require("../config/config");
const axios = require("axios");
const Restaurant = require("../models/Restaurant");

//Google Maps API -> to be used with
const getPlaces = async (
  price = 4,
  radius = 20,
  { lat = 45.50169, lng = -73.567253 },
  foodType
) => {
  try {
    const options = {
      method: "get",
      url: "https://maps.googleapis.com/maps/api/place/textsearch/json",
      params: {
        locations: `(${lat},${lng})`,
        radius,
        type: "restaurant",
        keyword: foodType,
        maxprice: price,
        key: config.GOOGLE_API_KEY,
      },
    };

    const response = await axios(options);
    if (response.status != 200) {
      return { success: false, message: response.data.error_message };
    }
    const restaurants = response.data.results.map((resto) => ({
      place_id: resto.place_id,
    }));
    return {
      success: true,
      message: "Got all places from Google",
      restaurants,
    };
  } catch (err) {
    console.error(err.message);
    return { success: false, message: "Problem with the request" };
  }
};
//maps.googleapis.com/maps/api/place/details/json?
//Get Restaurant Details for 1 Specific place
const getPlaceDetails = async (place_id) => {
  try {
    const options = {
      url: "https://maps.googleapis.com/maps/api/place/textsearch/json",
      method: "GET",
      params: {
        place_id,
        key: config.GOOGLE_API_KEY,
        field:
          "vicinity,name,photo,place_id,url,formatted_phone_number,opening_hours,website,price_level,rating,review,user_ratings_total",
      },
    };

    const response = await axios(options);
    if (response.status != 200) {
      return { success: false, message: response.data.error_message };
    }

    const data = response.data.result;

    const mongoPlace = await Restaurant.findOne({ place_id: data.place_id });

    if (mongoPlace) {
      return {
        success: true,
        message: "Place received successfully",
        restaurant: mongoPlace,
      };
    }

    const reviews = data.reviews.map((review) => ({
      author: review.author_name,
      rating: review.rating,
      text: review.text,
    }));

    const photos = data.photos
      .map((photo) => photo.photo_reference)
      .splice(0, 3);

    const restaurant = {
      place_id: data.place_id,
      company: data.name,
      photos,
      openedNow: data.opening_hours.open_now,
      website_link: data.website,
      price_level: data.price_level,
      rating: data.rating,
      reviews,
      url: data.url,
      vicinity: data.vicinity,
      phone_number: data.formatted_phone_number,
    };

    return {
      success: true,
      message: "Place received successfully",
      restaurant,
    };
  } catch (err) {
    console.error(err.message);
  }
};

//Get Picture from Places
const getPlacePicture = async (place_id) => {
  try {
    const options = {
      uri: `todo`,
      method: "GET",
      headers: { "user-agent": "node.js" },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);
      if (response.statusCode != 200) {
        return res.status(404).json({ msg: "Problem with the request" });
      }

      //Body will be the picture that is being returned

      //Parse JSON into DB for Restaurants

      const restoMainData = parsedJSON.results;

      res.json(parsedJSON);
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { getPlaceDetails, getPlaces, getPlacePicture };
