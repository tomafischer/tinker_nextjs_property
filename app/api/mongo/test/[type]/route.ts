import client from '@/utils/mongo/mongodb';
import connectDB from '@/utils/mongo/mongoose';
type Props = {
 params: {type: string}
}


export async function GET(request: Request, { params }: Props) {
  if (params.type === 'mongodb') {
  // test mongodb
    const mongoClient = await client.connect();
    await mongoClient.db('admin').command({ ping: 1 });
    return Response.json({ message: 'MongoDB via nativa MongoDB drivers connected' });
  }
  if (params.type === 'mongoose') {
    // test mongoose
    connectDB();
    return Response.json({ message: 'Mongoose connected' });
  }


  return Response.json({ message: `Type ${params.type} not found. Only mongodb or mongoose supported` })
}