import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo'>

      <Link to="/articulos" className='button'>Ver Artículos</Link>

    </div>
  )
}
