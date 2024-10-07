import Link from 'next/link';


type Props = {}

export default function HomePage({ }: Props) {

  return (
    <div>
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

    </div>
  );
}

