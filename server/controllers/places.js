require("express-async-errors");
const request = require("request");
const config = require("../config/config");
const axios = require("axios");

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

//Get Restaurant Details for 1 Specific place
const getPlaceDetails = async (place_id) => {
  /*
  To Do: Figure out Reviews and how to map it to the DB
         Add API call
         Pass ID 
  */
  try {
    const options = {
      uri: `todo`,
      method: "GET",
      headers: { "user-agent": "node.js" },
    };

    request(options, async (error, response, body) => {
      if (error) console.error(error);
      if (response.statusCode != 200) {
        return res.status(404).json({ msg: "Problem with the request" });
      }

      //Body will be the JSON containing all the data
      const parsedJSON = JSON.parse(body);

      //Parse JSON into DB for Restaurants

      var reviewsArr = [];
      for (obj in parsedJSON.results.reviews) {
        let tempObject = {
          author: obj.author_name,
          relative_time_description: obj.relative_time_description,
          text: obj.text,
        };
        reviewsArr.push(tempObject);
      }

      const restoMainData = parsedJSON.results;

      const restoDetails = new Restaurant({
        place_id: restoMainData.place_id,
        company: restoMainData.name,
        photos: restoMainData.photos, //To Be Determined
        opening_hours: restoMainData.opening_hours.open_now,
        website_link: restoMainData.website,
        price_level: restoMainData.price_level,
        rating: restoMainData.rating,
        reviews: reviewsArr,
        url: restoMainData.url,
        vicinity: restoMainData.vicinity,
        phone_number: restoMainData.formatted_phone_number,
      });

      const restoMongo = await restoDetails.save();

      res.json(parsedJSON);
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server Error" });
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
