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
    prod_waranty: req.body.prod_warranty,
  });

  // save user to DB
  // for comparative learning purposes following method is implemented using
  // promise, next method is implemented in async await

  prod
    .save(prod)
    .then((data) => {
      res.send(data);
      // res.redirect("/add-products");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ERROR while adding user",
      });
    });
};
// retrieve & return all user(s)

exports.findProd = async (req, res) => {
  // if product id is supplied then find product with id otherwise return all products
  const id = req.query.id; // need params id here
  if (id) {
    const productData = await ProdDb.findById(id, req.body);
    sendResponse(productData);
  } else {
    const productData = await ProdDb.find();
    sendResponse(productData);
  }

  function sendResponse(productData) {
    if (!productData) {
      return res.status(404).json({
        status: "failure",
        message: `No Data with corrosponding id : ${id} is found or database sent empty body`,
      });
    }
    return res.status(200).json({
      status: "success",
      userData: productData,
    });
  }
};

exports.updateProd = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Input data can not be empty" });
  }
  const id = req.params.id;
  /* in express url parameters and query parameters are there
   we can use them using params keyword , this here is url params
  useFindAndModify is depracted so we have to set it false here see ref#3.1 in readme.md*/
  ProdDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    (data) => {
      if (!data) {
        res.status(404).send({ message: `Cant update user with id ${id}` });
      } else {
        res.send(data);
      }
    }
  );
};

exports.updateProd = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Input data can not be empty" });
  }
  const id = req.params.id;
  /* in express url parameters and query parameters are there
   we can use them using params keyword , this here is url params
  useFindAndModify is depracted so we have to set it false here see ref#3.1 in readme.md*/
  ProdDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    (data) => {
      if (!data) {
        res.status(404).send({ message: `Cant update product with id ${id}` });
      } else {
        res.send(data);
      }
    }
  );
};
//Delete a user wrt userid

//Delete a user wrt userid
exports.deleteProd = (req, res) => {
  const id = req.params.id;

  ProdDb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Delete with product id ${id}. Maybe id is wrong`,
        });
      } else {
        res.send({
          message: "product was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete product with id=${id}`,
      });
    });
};

// const handleLogout = async (req, res) => {
