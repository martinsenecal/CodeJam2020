const mongoose = require("mongoose");

//Fields for Session (Game Room)

const SessionSchema = new mongoose.Schema({
  isMatched: {
    type: Boolean,
  },
  sessionId: {
    type: String,
  },
  latitude: { type: Number },
  longitude: { type: Number },
  locationRadius: { type: Number },
  price: { type: Number },
  matchedRestaurantId: {
    type: String,
  },
  users: [
    {
      userId: {
        type: String,
      },
      acceptedRestaurants: [
        {
          place_id: {
            type: String,
          },
        },
      ],
      declinedRestaurants: [
        {
          place_id: {
            type: String,
          },
        },
      ],
    },
  ], //where each users will have a list of accepted & declined restaurants
  restaurants: [
    {
      place_id: {
        type: String,
      },
    },
  ],
});

module.exports = Session = mongoose.model("session", SessionSchema);
