import React from 'react'

export const EventosComponente = () => {
  return (
    <div>
        <h1>Eventos en React</h1>
        {/*Evento click*/}
        <button onClick={ (evento) => {
            console.log(evento);
            console.log("Hola Mundo evento click");
        }}>Dame click!</button>
    </div>
  )
}
