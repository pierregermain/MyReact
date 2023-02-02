import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

export const Ejemplo = () => {

  const [numeroSaludos,setNumeroSaludos] = useState(0);
  const saludosEnCola = useRef(numeroSaludos);

  useEffect(() => {
    saludosEnCola.current = numeroSaludos;

    setTimeout(() => {
      console.log("----");
      console.log("**Saludos en cola (usando useRef, muestra valor actualizado):"+saludosEnCola.current);
      console.log("Saludos en cola (sin usar useRef, muestra valor con timeout):"+numeroSaludos);
    },2000);

  },[numeroSaludos]);

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
