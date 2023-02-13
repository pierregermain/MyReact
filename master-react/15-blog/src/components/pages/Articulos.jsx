import React from 'react'

export const Articulos = () => {
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
