const Session = require("../models/Session");
require("express-async-errors");

const getSession = async (req, res, next) => {
  try {
    //  Variables
    const sessionID = req.params.id;
    //  Logic
    //  Step 1: Check DB for session
    const session = await Session.findOne({ sessionId });
    //  Step 2: Return Session
    if (session) {
      return res.status(200).json({
        success: true,
        message: `${sessionID} has been found.`,
        session,
      });
    } else {
      //  Step 3: If no session then return no session
      return res.status(404).json({
        success: false,
        message: `${sessionID} has not been found.`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const postSession = async (req, res, next) => {
  try {
    //  Variables
    const { price, radius, foodType } = req.body;
    //  Logic
    //  Step 1: Fetch places from PLACES SEARCH GOOGLE API
    //  Step 2: Store step 2 into Session.Restaurants
    //  Step 3: Create session in DB
    //  Step 4: Return data to user
  } catch (err) {}
};

module.exports = { getSession, postSession };
