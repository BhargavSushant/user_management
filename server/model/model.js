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

let product_schema = new mongoose.Schema({
  prod_name: { type: String, required: true },
  prod_quantity: { type: String, required: true },
  prod_vendor_name: { type: String, required: true },
  prod_warranty: { type: String, required: true },
  prod_id: { type: String, required: true },
});
