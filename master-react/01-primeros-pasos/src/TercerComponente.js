import React from 'react'

export const TercerComponente = (props) => {
    console.log(props);
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <p>{props.nombre}</p>
        <p>{props.ficha.estado}</p>
    </div>
  )
}
