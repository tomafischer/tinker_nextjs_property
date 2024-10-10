
import { auth, signIn, signOut } from '@/auth';
import Link from 'next/link';
import Header from '@/components/auth_demo/header';
import { SignOut } from '@/components/auth_demo/auth-components';

type Props = {}

export default async function HomePage({ }: Props) {
  const session = await auth();


  return (
    <div>
      <Header />
      <h1 className="text-3xl">Welcometo Tom's World of learning CSS Tailwind and nextjs</h1>
      <h1 className='mt-4 mb-2 text-lg font-bold'>Nextjs projects </h1>
      <div className="flex flex-col">

        <Link href='/property'>Go to Properties Homepage</Link>
      </div>
      <h1 className='mt-4 mb-2 text-lg font-bold'>Tailwind</h1>
      <div className="flex flex-col">
        <Link href='/tw/mini-pricing' className="block">Go to Tailwind: Pricing card</Link>
        <Link href='/tw/product-modal' className="block">Go to Tailwind: Product Modal</Link>

      </div>
      <h1 className='mt-4 mb-2 text-lg font-bold'>MangoDB and Mangoose</h1>
      <div className="flex flex-col">
        <Link href='/mango'>Mango Home</Link>
      </div>
      <h1 className='mt-4 mb-2 text-lg font-bold'>Mongo and Kittens</h1>
      <div className="flex flex-col">
        <Link href='/api/mongo/test/mongoose'>Test Mongo via mongoose</Link>
        <Link href='/api/mongo/test/mongodb'>Test Mongo via mongodb</Link>
        <Link href='/api/kitten/mongoose'>All Kittens via mongodb</Link>
        <Link href='/api/kitten/Juniper'>Juniper kitten via mongoose</Link>
      </div>

      {/* Auth session info */}
      <h1 className="mt-4 mb-2 text-lg font-bold">Authentication info</h1>
      <div className="flex flex-col">
        <Link href='/api/auth-users/session'>User Session info via API</Link>
        <Link href='http://localhost:3000/api/auth-users/users?email=aft3000dev@gmail.com'>App User info by email - default session user</Link>
      </div>
      <div className="flex flex-col mt-4 rounded-md bg-gray-100">
        <div className="rounded-t-md bg-gray-200 p-4 font-bold">
          Current Session via Server rendered Page
        </div>
        <pre className="whitespace-pre-wrap break-all px-4 py-6">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
      {session && (   
       <SignOut/>
        )}
    </div>
  );
}

