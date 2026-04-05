import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Trying to connect MongoDB...");
    console.log("URI =", process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // 5 sec wait
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.error("MongoDB Connection Failed ❌");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
