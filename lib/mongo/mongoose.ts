import mongoose from "mongoose";


let connected = false;

const connectDB = async (dbName :string | null = null) => {
  mongoose.set("strict", true);

  // if the database is already connected, don't connect again
  if (connected) {
   // await  console.log("MongoDB is connected");
    //return;
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
    const options = dbName ? {dbName : dbName} : {};
    await mongoose.connect(mongoUri, options);
    connected = true;
  } catch (error) {
    console.log(error);
    //process.exit(1);
  }
};

const getConenction = (dbname: string |null = null) => {
  if (dbname){  
    return mongoose.connection.useDb(dbname);
  }
  return mongoose.connection;

}

const getTinker = () => {
  return mongoose.connection.useDb('tinker');
}



export {connectDB, getConenction, getTinker};

