let ProdDb = require("../model/product_model.js");
/** PRODUCT HANDLING */
//create and save a new product
exports.createProd = (req, res) => {
  // validation of request
  if (!req.body) {
    res.status(400).send({ message: "Empty String can not be entered" });
    return;
  }

  // new product
  const prod = new ProdDb({
    prod_id: req.body.prod_id,
    prod_name: req.body.prod_name,
    prod_price: req.body.prod_price,
    prod_vendor: req.body.prod_vendor,
    prod_quantity: req.body.prod_quantity,
    prod_waranty: req.body.prod_waranty,
  });

  // save user to DB
  prod
    .save(prod)
    .then((data) => {
      // res.send(data);
      res.redirect("/add-products");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ERROR while adding user",
      });
    });
};
// retrieve & return all user(s)

exports.findProd = (req, res) => {};

exports.updateProd = (req, res) => {};

//Delete a user wrt userid
exports.deleteProd = (req, res) => {};
// const handleLogout = async (req, res) => {
