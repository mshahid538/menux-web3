const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  visitDate: {
    type: Date,
  },
  userIP: {
    type: String,
  },
  email: String,
  phone: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
