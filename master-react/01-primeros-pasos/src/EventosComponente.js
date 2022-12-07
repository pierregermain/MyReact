import React from 'react'

export const EventosComponente = () => {
    const hasDadoClick = (evento,nombre) => {
        console.log(evento);
        console.log("Hola " + nombre);
    }
    const hasDadoDobleClick = () => {
        console.log("Hola doble click");
    }
  return (
    <div>
        <h1>Eventos en React</h1>

        {/*Evento click*/}
        <p>
        <button onClick={ evento => hasDadoClick(evento, "Pierre") }>Dame click!</button>
        </p>

        {/*Evento doble click*/}
        <p>
        <button onDoubleClick={ hasDadoDobleClick }>Dame doble click!</button>
        </p>
    </div>
  )
}
