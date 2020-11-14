/*
Related to Place Search: we get a list of Restaurants,and then we will make a specific 
query on each one of them
*/
const mongoose = require('mongoose');

const RestaurantsSchema = new mongoose.Schema({
  place_id: {
    type: String,
  },
  company: {
    type: String,
  },
});

module.exports = Restaurants = mongoose.model('restaurants', RestaurantsSchema);
