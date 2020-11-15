require("express-async-errors");
const { request } = require("express");
const config = require("../config/config");

//Google Maps API -> to be used with
const getPlaces = async (
  price = 4,
  radius = 20,
  { lat = 45.50169, lng = -73.567253 },
  foodType
) => {
  try {
    const options = {
      uri: "https://maps.googleapis.com/maps/api/place/textsearch/json"
        .concat(`?location=${(lat, lng)}`)
        .concat(`&radius=${radius}`)
        .concat(`&type=restaurant`)
        .concat(`&keyword=${foodType}`)
        .concat(`&maxprice=${price}`)
        .concat(`&key=${config.GOOGLE_API_KEY}`),
      //.concat(`&nextpagetoken=${}`),
      method: "GET",
      headers: { "user-agent": "node.js" },
    };

    await request(options, (error, response, body) => {
      if (error) return { success: false, message: error };
      if (response.statusCode != 200) {
        return { success: false, message: "Problem with the request" };
      }

      //Body will be the JSON containing all the data
      const parsedJSON = JSON.parse(body);

      //Parse JSON into DB for Restaurants
      const restaurants = parsedJSON.results.map((restaurant) => ({
        place_id: restaurant.place_id,
      }));

      console.log(restaurants);
      return {
        success: true,
        message: "Got all places from Google",
        restaurants,
      };
    });
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
