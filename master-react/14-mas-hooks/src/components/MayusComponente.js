import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const MayusComponente = () => {

  const {mayusculas, minusculas, concatenar} = useMayus("pieRRrrre");

  console.log(mayusculas());
  console.log(minusculas());
  console.log(concatenar("kolm"));

  return (
    <div>
      Probando
    </div>
  )
}
