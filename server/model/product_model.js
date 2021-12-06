// CONTAINS MONGODB SCHEMA

// load mongoose module
const mongoose = require("mongoose");

//user[name,email,gender,status] creating mongoogse schema
let product_schema = new mongoose.Schema({
  prod_name: { type: String, required: true },
  prod_quantity: { type: String, required: true },
  prod_vendor: { type: String, required: true },
  prod_warranty: { type: String, required: true },
  prod_id: { type: String, required: true, unique: true },
});

const productDB = mongoose.model("productDB", product_schema);

module.exports = productDB;
