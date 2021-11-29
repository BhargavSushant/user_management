const mongoose = require("mongoose");

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
    console.log("Mongodb connected...");
  });
};

module.exports = connectDB;
