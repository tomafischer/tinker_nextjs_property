import { type NextRequest } from "next/server";
import client from "@/utils/mongo/mongodb-client";
import { Db } from "mongodb";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name");
  const age = searchParams.get("age");

  const db = client.db('tinker');
  const newKitten = await db.collection('kittens').insertOne({name: name, age: age});

  return Response.json({ new_kitten: newKitten });

}

const example_return ={
  "new_kitten": {
      "acknowledged": true,
      "insertedId": "6706e8abfb17c85145e7ca7e"
  }
}
