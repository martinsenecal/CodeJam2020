const mongoose = require('mongoose');

//Fields for Session (Game Room)

const SessionSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  isMatched: {
    type: Boolean,
  },
  latitude: {},
  longitude: {},
  locationRadius: {},
  price: { type: Number },
  matchedRestaurant: { Boolean },
  users: {}, //where each users will have a list of accepted & declined restaurants
  restaurants: {}, //containing all metadata to keep
});

module.exports = Session = mongoose.model('session', SessionSchema);
