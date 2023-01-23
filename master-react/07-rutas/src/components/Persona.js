import React from 'react'
import { useParams } from 'react-router-dom'


export const Persona = () => {

  const parametros = useParams();
  console.log(parametros);

  const apellido = useParams().apellido;

  return (
    <div>
      <h1>Página de Persona: {parametros.nombre} {apellido}</h1>
    </div>
  )
}
