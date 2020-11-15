const mongoose = require('mongoose');

//Fields for Session (Game Room)

const SessionSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  isMatched: {
    type: Boolean,
  },
  latitude: { type: Number },
  longitude: { type: Number },
  locationRadius: { type: Number },
  price: { type: Number },
  matchedRestaurant: { Boolean },
  users: {}, //where each users will have a list of accepted & declined restaurants
  restaurants: { type: String }, //containing all restaurants place_ID with a "Yes"
});

module.exports = Session = mongoose.model('session', SessionSchema);
