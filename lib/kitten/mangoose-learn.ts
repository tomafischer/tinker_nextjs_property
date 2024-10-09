import Kitten from '@/models/mango-learn/Kitten';
import connectDB from '@/utils/mongo/mongoose';


const addKitten = async (name: string) => {
  await connectDB();
  
  const kitty = new Kitten({ name });
  console.log(kitty);
  kitty.speak();
 // console.log(kitty.speak());
  await kitty.save();
  console.log('Kitten saved');
  return;
}
export default addKitten;
