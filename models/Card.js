const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sureName: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("cards", CardSchema);
