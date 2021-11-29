const express = require("express");
const dotenv = require("dotenv"); //contains
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connections");
//express se front end
const app = express();

dotenv.config({ path: "./config.env" });

const portNo = process.env.portNo || 8080;

// log requests using Morgan
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// parse requests to body parser
app.use(express.urlencoded({ extended: true }));

// set view engine ( ejs is embedded java scripts template engine
// alternatives to ejs = pug, html
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views/include"));

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
// app.use("/include", express.static(path.resolve(__dirname, "views/include")));

// load routers
app.use("/", require("./server/routes/router"));

app.listen(portNo, () =>
  console.log(`Server is running on http://localhost:${portNo}`)
);
