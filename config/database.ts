import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strict", true);

  // if the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  // connect to the mongodb
  try {
    console.log("Connecting to MongoDB......");
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables"
      );
    }
    await mongoose.connect(mongoUri);
    connected = true;
  } catch (error) {
    console.log(error);
    //process.exit(1);
  }
};

export default connectDB;
