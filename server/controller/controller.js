let Userdb = require("../model/model.js");

//create and save a new user
exports.create = async (req, res) => {
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

  // const user = new Userdb({
  //   name: "req.body.name",
  //   email: "req.body.email",
  //   gender: "req.body.gender",
  //   status: "req.body.status",
  // });

  // save user to DB
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ERROR while adding user",
      });
    });
};

// retrieve & return all user(s)
exports.find = (req, res) => {};

//Update a new identified user by userid
exports.update = (req, res) => {};

//Delete a user wrt userid
exports.delete = (req, res) => {};

// const handleLogout = async (req, res) => {
