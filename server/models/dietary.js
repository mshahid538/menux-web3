const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dietarySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dietary", dietarySchema);
