import React  from 'react'
import { useState } from 'react';

export const Tareas = () => {

  const [tareas, setTareas] = useState([]);

  const guardarTareas = e => {
    e.preventDefault();
    setTareas(tarea => [...tarea, e.target.description.value] );
  }

  const borrarTarea = id => {
    // Filtrar tareas, quitamos la que tenga el indice de entrada 
    let tareas_filter = tareas.filter ((tarea,indice) => indice !== id)
    console.log(tareas_filter);
    // Guardar array
    setTareas(tareas_filter);
  }

  return (
    <div className='tareas-container'>
      <h1>Mis tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type="text" name="description" placeholder="Introduce tu tarea" />
        <input type="submit" value="Guardar" />
      </form>
      <h3>Lista tareas</h3>
      <ul>
      {
        tareas.map((tarea,indice) => {
          return (
            <li key={indice}>
              {tarea}
              &nbsp;
              <button onClick={() => borrarTarea(indice)}>x</button>
            </li>)
        })
      }
      </ul>
    </div>
  )
}
