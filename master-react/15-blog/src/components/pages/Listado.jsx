import React from 'react'
import { Global } from '../../helpers/Global';

export const Listado = ({articulos}) => {
  return (

            articulos.map(articulo => {
              return (
                <article key={articulo._id} className="articulo-item">
                  <div className='mask'>
                    {articulo.image != "default.png" && <img src={Global.urlImage + articulo.image} />}
                    {articulo.image == "default.png" && <img src="/src/assets/react.svg" />}
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
}
