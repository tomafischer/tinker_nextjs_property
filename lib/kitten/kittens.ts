import client from "@/utils/mongo/mongodb";
import connectDB from "@/utils/mongo/mongoose";
//import Kitten from "@/models/mango-learn/Kitten";
import { kittenSchema} from "@/models/mango-learn/Kitten";
import mongoose from "mongoose";

export async function getAllKittens_as_json(){
  const mongoClient = await client.connect();
  const kittens =  mongoClient.db('tinker').collection('kittens').find().toArray();
  return kittens;
}

export async function getAllKittens_as_model() {
  await connectDB();
  const db = mongoose.connection.useDb('tinker');

  const Kitten = db.model('Kitten', kittenSchema)
  const kittens =  Kitten.find();

  return kittens;
  
}