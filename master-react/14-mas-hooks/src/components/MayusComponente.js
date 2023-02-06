import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const MayusComponente = () => {


  const {estado, mayusculas, minusculas, concatenar} = useMayus("PieR");

  return (
    <div>
      <h2>{estado}</h2>

      <button onClick={mayusculas}>Mayus</button>
      <button onClick={minusculas}>Minus</button>
      <button onClick={e => concatenar('ito')}>Concat</button>

    </div>
  )
}
