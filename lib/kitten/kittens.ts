import client from "@/lib/mongo/mongo-client";
import {connectDB} from "@/lib/mongo/mongoose";
//import Kitten from "@/models/mango-learn/Kitten";
//import { kittenSchema} from "@/lib/kitten/Kitten";
import mongoose from "mongoose";

export async function getAllKittens_as_json(){
  const mongoClient = await client.connect();
  const kittens =  mongoClient.db('tinker').collection('kittens').find().toArray();
  return kittens;
}

