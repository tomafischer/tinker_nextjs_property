import { connectDB } from "@/lib/mongo/mongoose";
import mongoose from "mongoose";
import { Kitten, kittenSchema } from "@/lib/kitten/Kitten";
type Props = {
  params: {
    name: string;
  };
};

export async function GET(request: Request, { params }: Props) {
  await connectDB();
  const con = mongoose.connection.useDb('tinker');
  let temp = await Kitten.findOne({ name: params.name }).lean();
  const kitten_local = con.model('Kitten', kittenSchema);
  const kitten_local2 = con.model('Kitten', kittenSchema);
  const kitten = await kitten_local.findOne({ name: params.name }).lean();
  if (kitten){
    kitten.name = 'tom';
  }
  console.log(kitten?._id );
  return Response.json({ kitten });
}
