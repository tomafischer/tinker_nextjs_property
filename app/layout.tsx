import * as React from 'react';
import '@/assets/styles/globals.css';
import AuthProvider from '@/components/auth/AuthProvider';


//import { title } from 'process';


export const metadata = {
  title: "Tom's World",
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
    <AuthProvider>
    <html lang="en">
      <body>
    
        {children}
      </body>
    </html>
    </AuthProvider>
  );
}

