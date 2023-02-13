import React from 'react'
import { useState, useEffect } from 'react';
import { PeticionAjax } from '../../helpers/PeticionAjax';
import { Global } from '../../helpers/Global';

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {

    const {data, cargando} = await PeticionAjax(Global.urlRead, "GET");

    //console.log(data);
    //console.log(cargando);

    if(data.status === "success"){
      setArticulos(data.articles);
    }

    setCargando(false);

  };

  return (
    <>
    { cargando ? "Cargando..." : ""}
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
