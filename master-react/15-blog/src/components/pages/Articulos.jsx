import React from 'react'
import { useState, useEffect } from 'react';

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    let data = [
      {
        _id: 1,
        title: "title 1",
        content: "content 1"
      },
      {
        _id: 2,
        title: "title 2",
        content: "content 2"
      },
      {
        _id: 3,
        title: "title 3",
        content: "content 3"
      }
    ];
    setArticulos(data);
  }, [])

  return (
    <>Articulos
      <article className="articulo-item">
        <div className='mask'>
          <img src="/src/assets/react.svg" />
        </div>
        <div className='datos'>
          <h3 className="title">Desarrollo web</h3>
          <p className="description">victorroblesweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </div>
      </article>
    </>
  )
}
