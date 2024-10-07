import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
type Props = {};
export default function Footer({ }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    
    <div className="bg-gray-200 my-auto py-4 mt-24" >
      <div className="container flex mx-auto flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className='h-8 w-auto' />
        </div>
        {/* link grouping in a row */}
        <div className="flex flex-row flex-wrap justify-center">
          <ul className='flex space-x-4'>
            <li>
              <Link href="/property/properties">Properties</Link>
            </li>
            <li>
              <Link href='/properties'>Terms of Service</Link>
            </li>
          </ul>
        </div>
        {/* copyright */}
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0 text-center">
            &copy; {currentYear} Property Awesome. All rights reserverd.
          </p>
        </div>
      </div>
    </div>
  )
}