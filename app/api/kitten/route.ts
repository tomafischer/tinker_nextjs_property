import { type NextRequest } from 'next/server'
import {getAllKittens_as_json, getAllKittens_as_model} from '@/lib/kitten/kittens'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('type')
  if (query === 'mongoose') {
    // test mongoose
    try{
      const kitten = await getAllKittens_as_model()
      return Response.json({kitten_mongoose: kitten })
    }catch(e){
      return Response.json({ exception: e })
    }
  }
  else  {
    // test mongodb
    try{
      const kitten = await getAllKittens_as_json()
      return Response.json({kitten })
    }catch(e){
      return Response.json({ exception: JSON.stringify(e) })
    }
  
  }

}