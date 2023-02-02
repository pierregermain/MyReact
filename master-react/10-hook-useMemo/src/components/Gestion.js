import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {
  
  console.log('Hola mundo desde pantalla de gestión');

  const [nombre, setNombre] = useState("");
  const [pagina, setPagina] = useState(1);

  const gestor = useRef();
  const asignarGestor = e => {
    setNombre(gestor.current.value);
  }



  return (
    <div>
      <h1>Nombre del gestor: {nombre}</h1>
      <input type="text" ref={gestor} onChange={asignarGestor} placeholder="Introduce tu nombre de gestor" />

      <h2>Listado de empleados:</h2>
      <button onClick={() => {setPagina(1)}}>Página 1</button>
      <button onClick={() => {setPagina(2)}}>Página 2</button>
      <Empleados page={pagina}></Empleados>
      
      </div>
  )
}
