// using apis by callbacks, all callbacks functions will be placed here
// for better management of code

const axios = require("axios");
const { response } = require("express");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:5001/api/users")
    .then(function (response) {
      // console.log(response.data);
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
  axios
    .get("http://localhost:5001/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      // console.log("666666666666666", "userdata.data", userdata.data);
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.login = (req, res) => {
  res.render("login");
};

exports.logout = (req, res) => {
  res.render("logout");
};

// exports.list_products = (req, res) => {
//   axios
//     .get("http://localhost:5001/api/products")
//     .then(function (response) {
//       // console.log(response.data);
//       for (let i in response.data.userData) {
//         // console.log("i=", i, response.data.userData[i]);
//       }
//       res.render("list_products", { products: response.data.userData });
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

exports.list_products = async (req, res) => {
  const productData = await axios.get("http://localhost:5001/api/products");
  // let products;
  try {
    res.render("list_products", { products: productData.data.userData });
  } catch (e) {}
  // console.log(productData.data.userData);
  // console.log(products);
};

exports.edit_products = (req, res) => {
  res.render("edit_products");
};

exports.update_products = (req, res) => {
  axios
    .get("http://localhost:5001/api/products", { params: { id: req.query.id } })
    .then(function (productData) {
      // console.log("666666666666666", "userdata.data", userdata.data);
      console.log(productData.data.userData);
      res.render("update_products", { products: productData.data.userData });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_products = (req, res) => {
  res.render("add_products");
};
