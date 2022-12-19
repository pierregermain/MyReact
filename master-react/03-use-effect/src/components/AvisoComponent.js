import React from 'react'

export const AvisoComponent = () => {
  return (
    <div>
        <hr></hr>
        <h3>Hola Pierre</h3>
        <button onClick={e => {
          alert('Bienvenido');
        }}>Mostrar alerta</button>
    </div>
  )
}
