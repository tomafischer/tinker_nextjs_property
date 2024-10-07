'use client';

//console.log('PropertyPage')
import {useRouter, useParams, useSearchParams, usePathname} from 'next/navigation';
type Props = {}

export default function PropertyPage({}: Props) {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  console.log(router);
  console.log(params);
  console.log(searchParams)
  return (
    <div>
      <h2>PropertyPage</h2>
      <div>Pathname: {pathName}</div>
      <div>Paramter for id: {params.id}</div>
      <div>Search parameter: {searchParams.get('name')}</div>
      <div>Keys: {searchParams.keys()}</div>
      <button onClick={() => router.replace('/')}>router.replace('/')</button>

    </div>
   
  )
}