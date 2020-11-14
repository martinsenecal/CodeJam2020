const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  place_id: {
    type: String, //Unique ID
  },
  company: {
    type: String,
  },
  photos: {
    //Up to 10 photos
    type: [String],
  },
  opening_hours: {
    type: Boolean,
  },
  website_link: {
    type: String,
  },
  price_level: {
    type: Number, //0 to 4
  },
  rating: {
    type: Number,
  },
  reviews: [
    {
      author: {
        type: String,
      },
      relative_time_description: {
        type: String,
      },
      text: {
        type: String,
      },
    },
  ],
  url: {
    type: String,
  },
  vicinity: {
    type: String,
  },
  phone_number: {
    type: String,
  },
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);
