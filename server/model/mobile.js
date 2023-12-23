const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
  modelNumber: {
    type: Number,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  description: String,
  highlights: {
    processor: String,
    RAM: String,
    OS: String,
    Display: String,
    Camera: String,
    color: String,
  },
  price: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Mobile = mongoose.model("Mobile", mobileSchema);

module.exports = Mobile;
