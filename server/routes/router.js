const express = require("express");
const route = express.Router();
// instead of const app = express() we do this because express() will create a new app
// we want only router

const services = require("../services/render");

// old way, left for reference purposes only
// route.get("/", (req, res) => {
//   // this method will allow us to render html file
//   // res.send("CRUD App");
//   // res.render("index");
// });

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description Add User Route
 * @method GET /add-user
 */
route.get("/add-user", services.add_user);

/**
 * @description Update User Route
 * @method GET /update-user
 */
route.get("/update-user", services.update_user);

// deploy middleware
module.exports = route;
