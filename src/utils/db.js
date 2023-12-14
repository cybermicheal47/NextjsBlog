import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODATA, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add other options if needed
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error.message);
    // You might want to throw an error here or handle it differently based on your app's requirements
    throw new Error("Connection to MongoDB failed");
  }
};

export default connectDB;
