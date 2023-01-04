import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState,setListadoState}) => {

  useEffect(() => {

    console.log('componente del listado de pelis')
    getPelis();

  },[]);

  const getPelis = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  };

  const deletePeli = (id) => {
    // Filtrar peli desde el localstorage
    let pelis_localstorage = getPelis();
    let pelis_localstorage_new = pelis_localstorage.filter(peli => peli.id !== parseInt(id));

    // Actualizar localstorage
    localStorage.setItem('pelis', JSON.stringify(pelis_localstorage_new));

    // Actualizar UI
    setListadoState(pelis_localstorage_new);
  }

  return (
    <>
    {listadoState != null ?
      listadoState.map(peli => {
        return (
              <article key={peli.id} className="peli-item">
                  <h3 className="title">{peli.title}</h3>
                  <p className="description">{peli.description}s</p>

                  <button className="edit">Editar</button>
                  <button className="delete" onClick={ () => deletePeli(peli.id)}>Borrar</button>
              </article>
        );
      })
    : <h2>No hay pelis para mostrar</h2>
    }

    </>
  )
}
