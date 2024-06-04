//creating a function to connect to MongoDB Atlas through Mongoose
const mongoose = require("mongoose");

const connectToDataBase = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Connected to: ${conn.connection.host}`);
};

module.exports = connectToDataBase;
