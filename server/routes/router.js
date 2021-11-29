const express = require("express");
const route = express.Router();
// instead of const app = express() we do this because express() will create a new app
// we want only router

route.get("/", (req, res) => {
  // this method will allow us to render html file
  // res.send("CRUD App");
  res.render("index");
});

route.get("/add-user", (req, res) => {
  // this method will allow us to render html file
  // res.send("CRUD App");
  res.render("add_user");
});

route.get("/update-user", (req, res) => {
  // this method will allow us to render html file
  // res.send("CRUD App");
  res.render("update_user");
});

// deploy middleware
module.exports = route;
