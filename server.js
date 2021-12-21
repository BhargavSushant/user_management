// using CommonJS require() to include modules that exist in
// separate files, it Read, executes, Returns the object
// from supplied JS File
const cookieParser = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv"); //contains
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connections");
//express se app generation
const app = express();

// load environmental variables from config.env
dotenv.config({ path: "./config.env" });

// load port number (if 3000 not available then default 8080)
const portNo = process.env.portNo || 8080;
const MONGO_URI = process.env.MONGO_URI ?? 404;

// log requests using Morgan
// Morgan is a middleware between Node.js & Express
// It logs HTTP requests, we use app.use(path,callback) to add middlewares in nodejs
app.use(morgan("tiny"));
app.use(cookieParser());

// mongodb connection
connectDB();

// parse requests to body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// set view engine ( ejs is embedded java scripts template engine
// alternatives to ejs = pug, html
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views/include"));

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
// app.use("/include", express.static(path.resolve(__dirname, "views/include")));

// load routers, this will tell node which is main page and where to navigate
// when a certain item is clicked (routing)
app.use("/", require("./server/routes/router"));

app.listen(portNo, () =>
  console.log(`Server is running on http://localhost:${portNo}`)
);
