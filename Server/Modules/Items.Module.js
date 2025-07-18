const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  miles: {
    type: String,
    required: true,
  },
  gearType: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
},
    {
    timestamps:true,
});

module.exports = mongoose.model("Items", ItemSchema);