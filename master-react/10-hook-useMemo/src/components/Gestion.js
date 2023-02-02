import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {
  
  const [nombre, setNombre] = useState("");

  const gestor = useRef();
  const asignarGestor = e => {
    setNombre(gestor.current.value);
  }



  return (
    <div>
      <h1>Nombre del gestor: {nombre}</h1>
      <input type="text" ref={gestor} onChange={asignarGestor} placeholder="Introduce tu nombre de gestor" />

      <h2>Listado de empleados:</h2>
      <Empleados></Empleados>
      
      </div>
  )
}
