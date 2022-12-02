import React from 'react'

export const TercerComponente = ({nombre, libro, ficha}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <p>{nombre}</p>
        <p>{ficha.estado}</p>
    </div>
  )
}
