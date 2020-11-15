const Session = require("../models/Session");
const Restaurant = require("../models/Restaurant");
require("express-async-errors");

//POST Decisions
const postDecision = async (req, res, next) => {
  try {
    //Variables
    const { userId, place_id, accepted, sessionId } = req.body;
    //Logic
    //Step 1: Check if users exist
    const session = await Session.findOne({ sessionId });

    if (session) {
      let user = -1;
      for (let i = 0; i < session.users.length && user == -1; i++) {
        if (session.users[i].userId === userId) {
          user = i;
        }
      }

      if (user == -1) {
        //Create User
        const newUser = {
          userId,
          acceptedRestaurants: [],
          declinedRestaurants: [],
        };
        session.users = session.users.concat(newUser);
        user = session.users.length - 1;
      }
      //Step 2: Update DB accepted or declined for user for a certain place
      if (accepted) {
        session.users[user].acceptedRestaurants = session.users[
          user
        ].acceptedRestaurants.concat({ place_id });
      } else {
        session.users[user].declinedRestaurants = session.users[
          user
        ].declinedRestaurants.concat({ place_id });
      }

      //  Step 3: Check if it a match
      let matched = session.users.length === 1 ? false : true;
      for (let i = 0; i < session.users.length && matched; i++) {
        if (session.users[i].userId !== userId) {
          const acceptedRestaurants = session.users[i].acceptedRestaurants.map(
            (resto) => resto.place_id
          );
          console.log(acceptedRestaurants);
          if (!acceptedRestaurants.includes(place_id)) {
            matched = false;
          }
        }
      }

      if (matched) {
        session.isMatched = true;
        session.matchedRestaurantId = place_id;
        const matchedRestaurant = await Restaurant.findOne({ place_id });
        await session.save();
        return res.status(200).json({
          success: true,
          message: "Match found successfully.",
          session,
          restaurant: matchedRestaurant,
        });
      }

      //  Step 4: Return
      await session.save();
      return res.status(201).json({
        success: true,
        message: "Decision updated successfully.",
        session,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Error loading session.",
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

module.exports = { postDecision };
