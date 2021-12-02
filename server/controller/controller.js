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
exports.find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "ERROR IN RETRIEVE" });
    });
};

//Update a new identified user by userid
// Logic = if request body is not available then throw 400 err
//          else find by id and update
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Input data can not be empty" });
  }
  const id = req.params.id; // in express url parameters and query parameters are there
  // we can use them using params keyword , this here is url params
  /** useFindAndModify is depracted so we have to set it false here see ref#1 in readme.md*/
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    (data) => {
      if (!data) {
        res.status(404).send({ message: `Cant update user with id ${id}` });
      }
    }
  );
};

//Delete a user wrt userid
exports.delete = (req, res) => {};

// const handleLogout = async (req, res) => {
