import React, { useId } from 'react'

export const UseIdComponent = () => {

  const id = useId();

  console.log(id);

  return (
    <div>
      <h1>Hook useId</h1>
      <input id={id} name="name" type="text" placeholder='Nombre'></input>
    </div>
  )
}
