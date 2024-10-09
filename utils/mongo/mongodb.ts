import { ObjectId } from "mongodb";
interface MongoModelBase{
  _id?: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const addTS = (data : any) => {
  let date = new Date();
  data.createdAt = date;
  data.updatedAt = date;
  return data;
}
const updateTS = (data : any) => {
  data.updatedAt = new Date();
  return data;
}

export {addTS, updateTS};
export type {MongoModelBase}