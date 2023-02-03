import React, { useMemo }  from 'react'
import { useState } from 'react';

export const Tareas = () => {

  const [tareas, setTareas] = useState([]);
  const [contador,setContador] = useState(0);

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

  const sumar = e => {
    setContador(contador + 1);
  }

  const resetear = e => {
    setContador(0);
  }

  const tareaPesada = (acumulacion) => {
    acumulacion = Math.pow(2,acumulacion);
    for (let i = 0; i <= acumulacion; i++){
      console.log('Ejecutando acumulacion');
    }
    return acumulacion
  }

  // Esta tarea sólo se va a ejecutar cuando "contador" se haya modificado
  const memoTareaPesada = useMemo(() => tareaPesada(contador),[contador]);


  return (
    <div className='tareas-container'>

      <h1>Mis tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type="text" name="description" placeholder="Introduce tu tarea" />
        <input type="submit" value="Guardar" />
      </form>

      <h3>Contador de tareas: {contador}
      </h3>
        <button onClick={sumar}>Sumar</button>
        <button onClick={resetear}>Resetear</button>

      <h3>Proceso largo: 2 exp({contador}) = {memoTareaPesada}</h3><p>(Número 2 elevado al contador)</p>


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
