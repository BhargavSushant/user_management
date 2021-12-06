let Userdb = require("../model/model.js");

//create and save a new user
exports.create = (req, res) => {
  // validation of request
  if (!req.body) {
    res.status(400).send({ message: "Empty String can not be entered" });
    return;
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user to DB
  user
    .save(user)
    .then((data) => {
      // res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ERROR while adding user",
      });
    });
};

// retrieve & return all user(s)

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id " + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};
//Update a new identified user by userid
// Logic = if request body is not available then throw 400 err
//          else find by id and update
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Input data can not be empty" });
  }
  const id = req.params.id;
  /* in express url parameters and query parameters are there
   we can use them using params keyword , this here is url params
  useFindAndModify is depracted so we have to set it false here see ref#3.1 in readme.md*/
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    (data) => {
      if (!data) {
        res.status(404).send({ message: `Cant update user with id ${id}` });
      } else {
        res.send(data);
      }
    }
  );
};

//Delete a user wrt userid
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
// const handleLogout = async (req, res) => {

/** PRODUCT HANDLING */

//create and save a new product
exports.createProd = (req, res) => {
  // validation of request
  if (!req.body) {
    res.status(400).send({ message: "Empty String can not be entered" });
    return;
  }

  // new user
  const prod = new ProdDb({
    prodName: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user to DB
  prod
    .save(prod)
    .then((data) => {
      // res.send(data);
      res.redirect("/add-product");
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


  er.);
  route.get("/api/products", controller.findProd);
  route.put("/api/products/:id", controller.updateProd);
  route.delete("/api/products/:id", controller.deleteProd);