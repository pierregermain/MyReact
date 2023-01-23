import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const Persona = () => {

  const {nombre, apellido} = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;

    // Redirect
    let url = `/persona/${nombre}/${apellido}`; 
    navegar(url);

  }

  return (
    <div>
      {!nombre && <h1> No hay nombre</h1>}
      {!apellido && <h1>No hay apellido</h1>}
      <h1>Página de Persona: {nombre} {apellido}</h1>

      <form onSubmit={enviar}>
        <input type="text" name="nombre" />
        <input type="text" name="apellido" /> 
        <input type="submit" name="enviar" value="enviar" />
      </form>
    </div>
  )
}
