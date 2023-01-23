import React from 'react'
import { useParams } from 'react-router-dom'


export const Persona = () => {

  let {nombre, apellido} = useParams();

  if(!nombre){
    nombre= "Pierre";
  }
  if(!apellido){
    apellido= "Germain";
  }

  return (
    <div>
      <h1>Página de Persona: {nombre} {apellido}</h1>
    </div>
  )
}
