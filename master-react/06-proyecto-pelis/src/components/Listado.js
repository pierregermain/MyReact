import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState,setListadoState}) => {

  useEffect(() => {

    console.log('componente del listado de pelis')
    getPelis();

  },[]);

  const getPelis = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);
    console.log(peliculas);
  };


  return (
    <>
    {listadoState != null ?
      listadoState.map(peli => {
        return (
              <article key={peli.id} className="peli-item">
                  <h3 className="title">{peli.title}</h3>
                  <p className="description">{peli.description}s</p>

                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>
        );
      })
    : <h2>No hay pelis para mostrar</h2>
    }

    </>
  )
}
