const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
console.log("MongoDB URI:", URI);


const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection successful to DB");
  } catch (error) {
    console.error("Database connection failed:", error); // Print full error
    process.exit(1);
  }
};


module.exports = connectDb;
