import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "GOT", "RHCP"];

  return (
    <div className='segundo-componente'>
        <h1>Listado Libros</h1>
        <p>Uso de array</p>
        <ul>
            <li>{libros[0]}</li>
            <li>{libros[1]}</li>
            <li>{libros[2]}</li>
        </ul>
        <p>Uso de map</p>
        <ul>
            {
                libros.map(libro, indice => {
                    return <li key={indice}>{libro}</li>
                })
            }
        </ul>
    </div>
  )
}
