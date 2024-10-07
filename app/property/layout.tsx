import * as React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '../../components/property/Navbar';

//import { title } from 'process';


export const metadata = {
  title: "Tom's Property App",
  keywords: "property, real estate, homes, houses, apartments",
  description: "Find the perfect rental property",
}

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({
  children }: Props) {
    //const pathname = usePathname();
    
  return (
    <html lang="en">
      <body
      >
    <div>
        <Navbar />
        {children}
        </div>
       </body>
     </html>
  );
}

