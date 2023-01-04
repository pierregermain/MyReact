import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState,setListadoState}) => {

  const [editar, setEditar] = useState(0);

  useEffect(() => {

   let peliculas = JSON.parse(localStorage.getItem("pelis"));
   setListadoState(peliculas);

  }, [setListadoState]);

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
                  <p className="description">{peli.description}</p>

                  <button className="edit" onClick={ () => setEditar(peli.id) }>Editar</button>
                  <button className="delete" onClick={ () => deletePeli(peli.id)}>Borrar</button>

                  {/*Formulario Editar*/}
                  {editar === peli.id && (
                    <Editar peli={peli}
                      conseguirPeliculas={getPelis}
                      setEditar={setEditar}
                      setListadoState={setListadoState}
                      />
                  )}

              </article>
        );
      })
    : <h2>No hay pelis para mostrar</h2>
    }

    </>
  )
}
