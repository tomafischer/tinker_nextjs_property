

//console.log('PropertyPage')

type Props = {
  params: {id: string},
  searchParams: any
}

export default function PropertyPage({params, searchParams}: Props) {



  console.log(params);
  console.log(searchParams);

  return (
    <div>
      <h2>PropertyPage</h2>
    
      <div>Paramter for id: {params.id}</div>
      <div>{JSON.stringify( searchParams)}</div>
      <div>{searchParams.name}</div>

    </div>
   
  )
}