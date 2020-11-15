/**
 * receive user id, place_id, accepted: boolean
 * update DB accepted or declined for user for place
 * return;
 *
 * check if users exist
 */
const Session = require('../models/Session');
require('express-async-errors');

//POST Decisions
const postDecisions = async (req, res, next) => {
  try {
    //Variables
    const { userId, place_id, accepted, sessionId } = req.body;
    //Logic
    //Step 1: Check if users exist
    const session = await Session.findOne({ sessionId });
    if (session) {
      const existingUser = session.users[userId];
      if (!existingUser) {
        //Create User
        const newUser = {
          userId: userId,
          //TBD
        };
        existingUser.concat(userId);
      }
      //Step 2: Update DB accepted or declined for user for a certain place
      if (accepted) {
        existingUser.acceptedRestaurants.concat(place_id);
      } else {
        existingUser.declinedRestaurants.concat(place_id);
      }
      await session.save();

      //Step 3: Return
      return res.status(201).json({
        success: true,
        message: 'Session updated successfully.',
        session,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Error loading session.',
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
