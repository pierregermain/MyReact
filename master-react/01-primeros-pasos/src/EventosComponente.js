import React from 'react'

export const EventosComponente = () => {
    const hasDadoClick = (evento,nombre) => {
        console.log(evento);
        console.log("Hola " + nombre);
    }
  return (
    <div>
        <h1>Eventos en React</h1>
        {/*Evento click*/}
        <button onClick={ evento => hasDadoClick(evento, "Pierre") }>Dame click!</button>
    </div>
  )
}
