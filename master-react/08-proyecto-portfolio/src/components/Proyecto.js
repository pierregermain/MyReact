import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos} from '../data/trabajos';

export const Proyecto = () => {

  const params = useParams();
  const [proyecto, SetProyecto] = useState({});

  useEffect(() => {
    let proyectos = trabajos.filter(trabajo => trabajo.id === params.id);
    SetProyecto(proyectos[0]);

  }, []);



  return (
    <div className='page'>
      <h1>Proyecto: {proyecto.nombre}</h1>
      <ul>
        <li>Techs: {proyecto.techs}</li>
        <li>Url: {proyecto.url}</li>
        <li>category: {proyecto.category}</li>
      </ul>
    </div>
  )
}
