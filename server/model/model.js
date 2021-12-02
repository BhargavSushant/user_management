// CONTAINS MONGODB SCHEMA

// load mongoose module
const mongoose = require("mongoose");

//user[name,email,gender,status] creating mongoogse schema
let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("userdb", schema);
module.exports = Userdb;
