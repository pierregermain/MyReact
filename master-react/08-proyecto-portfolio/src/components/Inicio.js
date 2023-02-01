import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Pierre W. Bertram - Drupalero</h1>
      <Link to="/contacto">Reactciona conmigo</Link>
      <h2>Trabajos realizados</h2>
      <section className='last-works'>

        <div className='works'>
          <ListadoTrabajos limite="2"/>
        </div>

      </section>
    </div>
  )
}
