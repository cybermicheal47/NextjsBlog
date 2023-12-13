import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODATA);
  } catch (error) {
    throw new Error("connection failed");
    handleError(error);
  }
};

export default connect;
