import React from 'react'
import { useParams } from 'react-router-dom'


export const Persona = () => {

  let {nombre="Pierre", apellido="Germain"} = useParams();

  return (
    <div>
      <h1>Página de Persona: {nombre} {apellido}</h1>
    </div>
  )
}
