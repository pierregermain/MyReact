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
      title: e.target.title.value,
      description: e.target.description.value
    };

    const action = {
      type: "create",
      payload: juego
    };

    dispatch(action);
  }

  const borraElemento = id => {
    const action = {
      type: "delete",
      payload: id
    };

    dispatch(action);
  }

  const editElement = (e,id) => {

    let juego = {
      id,
      title: e.target.value,
      description: e.target.value
    };

    const action = {
      type: "edit",
      payload: juego
    };

    dispatch(action);

  }

  return (
    <div>
      <h1>Mis Videojuegos</h1>
      <p>Número de Videjuegos: {juegos.length}</p>
      <ul className='mis-juegos'>
        {juegos.map(juego => (
          <li key={juego.id}>
            {juego.title} &nbsp;<button onClick={e => borraElemento(juego.id)}>x</button>
            <input type="text" 
              onBlur={ e => editElement(e, juego.id)} 
              onKeyPress={ e => { if (e.key == "Enter") editElement(e, juego.id)}} 
            />
          </li>
        ))
        }
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
