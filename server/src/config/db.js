const mongoose = require("mongoose");

export default connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    console.log(process.env.MONGODB_URI);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
