import React, {useContext} from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const infoCompartida = useContext(PruebaContext);

  console.log(infoCompartida);

  return (
    <div>Inicio</div>
  )
}
