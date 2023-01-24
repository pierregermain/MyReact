import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Pierre W. Bertram - Drupalero</h1>
      <Link to="/contacto">Reactciona conmigo</Link>
      <h2>Trabajos realizados</h2>
      <section className='last-works'>

        <div className='works'>
        </div>

      </section>
    </div>
  )
}
