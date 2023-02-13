import React from 'react'
import { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = Global.urlRead;
    let peticion = await fetch(url, {
      method: "GET"
    });
    let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulos(datos.articles);
    }
  };

  return (
    <>
      {
        articulos.length >= 1 ?

          (
            articulos.map(articulo => {
              return (
                <article key={articulo._id} className="articulo-item">
                  <div className='mask'>
                    <img src="/src/assets/react.svg" />
                  </div>
                  <div className='datos'>
                    <h3 className="title">{articulo.title}</h3>
                    <p className="description">{articulo.content}</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                  </div>
                </article>
              );
            })
          )
          :
          (
            <h1> No hay artículos</h1>
          )
      }
    </>
  )
}
