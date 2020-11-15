const Session = require("../models/Session");
const { getPlaces } = require("./places");
require("express-async-errors");

//  GET http://localhost:5000/api/session/:id
const getSession = async (req, res, next) => {
  try {
    //  Variables
    const sessionId = req.params.id;
    //  Logic
    //  Step 1: Check DB for session
    const session = await Session.findOne({ sessionId });
    //  Step 2: Return Session
    if (session) {
      return res.status(200).json({
        success: true,
        message: `${sessionId} has been found.`,
        session,
      });
    } else {
      //  Step 3: If no session then return no session
      return res.status(404).json({
        success: false,
        message: `${sessionId} has not been found.`,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//  POST http://localhost:5000/api/session/
const postSession = async (req, res, next) => {
  try {
    //  Variables
    const { sessionId, price, radius, foodType, lat, lng } = req.body;
    //  Logic
    //  Step 1: Fetch places from PLACES SEARCH GOOGLE API
    const restaurants = await getPlaces(price, radius, { lat, lng }, foodType);
    if (!restaurants.success) {
      return res
        .status(500)
        .json({ success: false, message: "Error getting restaurants" });
    }
    //  Step 2: Store step 2 into Session.Restaurants
    //  Step 3: Create session in DB
    const session = await new Session({
      isMatched: false,
      sessionId,
      latitude: lat,
      longitude: lng,
      locationRadius: radius,
      price,
      restaurants: restaurants.restaurants,
    }).save();
    //  Step 4: Return data to user
    if (session) {
      return res.status(201).json({
        success: true,
        message: "Session created successfully.",
        session,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Error creating session.",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { getSession, postSession };
