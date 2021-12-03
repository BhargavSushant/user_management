// using apis

const axios = require("axios");
const { response } = require("express");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:5001/api/users")
    .then(function (response) {
      console.log(response.data);
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  res.render("update_user");
};

exports.login = (req, res) => {
  res.render("login");
};

exports.logout = (req, res) => {
  res.render("logout");
};

exports.list_products = (req, res) => {
  res.render("list_products");
};

exports.edit_products = (req, res) => {
  res.render("edit_products");
};

exports.update_products = (req, res) => {
  res.render("update_products");
};
