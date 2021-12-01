// returns connectDB object using Mongoose library
// Mongoose is ODM ( object data modeling library)
// MongoDB is Schema-Less DBMS, Mongoose helps developers to
// add schema of choice on application layer.

const mongoose = require("mongoose");

// depracted code, not removed for future reference
// const connectDB = async () => {
//   try {
//     // mongodb connection string
//     const connection = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });
//     console.log(`MongoDB Connected:${con.connection.host}`);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI, async (err) => {
    if (err) throw err;
    // console.log(`MongoDB Connected:${con.connection.host}`);
    console.log(
      `"Mongodb connected : ${MONGO_URI}..."`,
      "background: #222; color: #bada55"
    );
  });
};

// akin to return, we export using module.export object
// `module.export`  module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
module.exports = connectDB;
