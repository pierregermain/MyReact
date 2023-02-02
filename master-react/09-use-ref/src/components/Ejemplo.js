import React from 'react'
import { useState } from 'react';

export const Ejemplo = () => {

  const [numeroSaludos,setNumeroSaludos] = useState(0);

  const enviarSaludo = e => {
    setNumeroSaludos(numeroSaludos + 1);

  }

  return (
    <div>
      <h1>Ejemplo con useRef</h1>
      <h2>Saludos enviados: {numeroSaludos}</h2>
      <button onClick={enviarSaludo}>Enviar Saludo!</button>
    </div>
  )
}
