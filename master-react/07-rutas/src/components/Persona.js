import React from 'react'
import { useParams } from 'react-router-dom'


export const Persona = () => {

  const {nombre, apellido} = useParams();

  return (
    <div>
      {!nombre && <h1> No hay nombre</h1>}
      {!apellido && <h1>No hay apellido</h1>}
      <h1>Página de Persona: {nombre} {apellido}</h1>
    </div>
  )
}
