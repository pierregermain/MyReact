import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <section className='works'>
      {
        trabajos.map(trabajo => {
          return (
            <article key={trabajo.id} className="work-item">
              <div className='mask'>
                <img src={"/images/"+trabajo.id+".png"}/>
              </div>
              <h2>{trabajo.nombre}</h2>
              <Link to={"/proyecto/"+trabajo.id}>Read More</Link>
            </article>
          )
        })
      }
      </section>
    </div>
  )
}
