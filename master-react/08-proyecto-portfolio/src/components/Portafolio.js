import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      {
        trabajos.map(trabajo => {
          return (
            <article key={trabajo.id}>
              <h2>{trabajo.nombre}</h2>
              <Link to={"/proyecto/"+trabajo.id}>Read More</Link>
            </article>
          )
        })
      }

    </div>
  )
}
