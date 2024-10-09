import client from "@/utils/mongo/mongodb-client";

export async function GET(request: Request){
 // const mongoClient =await client.connect();
  //const db = client.db()
  const data = await client.db().collection('users').findOne({email: 'aft3000dev@gmail.com'});
  //console.log(data);
  return Response.json(data);
  

}