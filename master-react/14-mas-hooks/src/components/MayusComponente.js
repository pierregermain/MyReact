import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const MayusComponente = () => {

  const [myText, setMyText] = useState("Pierre G");

  const {mayusculas, minusculas, concatenar} = useMayus(myText);

  console.log(mayusculas());
  console.log(minusculas());
  console.log(concatenar("kolm"));

  return (
    <div>
      {myText}

      <button onClick={ e => {
        setMyText(mayusculas());
      }}>Mayus</button>
      
    </div>
  )
}
