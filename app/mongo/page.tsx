'use client';
import React from 'react'
import addKitten from '@/lib/kitten/mangoose-learn';
type Props = {}

export default function MangoPage({}: Props) {

  const addKitten_local = async (name: string) => {
    await addKitten(name);
  }

  return (
    <div>
      <div>MangoPage</div>
      <div>Connected to MangoDB :</div>
      {/* <button onClick={() => addKitten_local('Juniper')}>Save new kitten</button> */}
    </div>
    
  )
}