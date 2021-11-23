const express = require("express");
const dotenv = require("dotenv"); //contains
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

//express se front end
const app = express();

dotenv.config({ path: "./config.env" });

const portNo = process.env.portNo || 8080;

// log requests using Morgan
app.use(morgan("tiny"));

// pass requests to body parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("CRUD App");
});

app.listen(portNo, () =>
  console.log(`Server is running on http://localhost:${portNo}`)
);
