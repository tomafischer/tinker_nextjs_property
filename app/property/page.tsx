import Link from 'next/link';
import connectDB from '@/utils/mongo/mongoose';
import Property from '@/models/property/Property';
import Hero from '@/components/property/Hero';
import InfoBoxes from '@/components/property/InfoBoxes';
import Footer from '@/components/property/Footer';

type Props = {}

export default async function HomePage ({}: Props) {
  //console.log(process.env.MONGODB_URI);
  connectDB();
  const recentProperties = await Property.find({}).sort({ createdAt: -1 }).limit(3).lean();
  return (
    <>
     <Hero />
     <InfoBoxes />
     <Footer />
        
    </>
  );
}

