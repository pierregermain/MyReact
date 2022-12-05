import React from 'react'

export const EventosComponente = () => {
    const hasDadoClick = (evento) => {
        console.log(evento);
        console.log("HOla desde el click function");
    }
  return (
    <div>
        <h1>Eventos en React</h1>
        {/*Evento click*/}
        <button onClick={ hasDadoClick }>Dame click!</button>
    </div>
  )
}
