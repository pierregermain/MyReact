import React, { useReducer, useEffect } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem("juegos")) || [];
}

export const MisJuegos = () => {

  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos])

  const conseguirDatosForm = e => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.title.value,
      description: e.target.description.value
    };

    const action = {
      type: "create",
      payload: juego

    };

    dispatch(action);

    console.log(juegos);
  }

  return (
    <div>
      <h1>Mis Videojuegos</h1>
      <p>Número de Videjuegos</p>
      <ul className='mis-juegos'>
        <li>Gta</li>
        <li>Gta</li>
        <li>Gta</li>
      </ul>
      <h3>Agregar Juego</h3>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="title" placeholder='Titulo'></input>
        <textarea name="description" placeholder='Descripción'></textarea>
        <input type="submit" ></input>
      </form>

    </div>
  )
}
