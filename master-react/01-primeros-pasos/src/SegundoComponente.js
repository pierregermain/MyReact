import React from 'react'

export const SegundoComponente = () => {

    let libros = ["Harry Potter", "GOT", "RHCP"];
    //const libros = [];

  return (
    <div className='segundo-componente'>
        {libros.length >= 1 ? 
            (<>
            <h1>Listado Libros</h1>
            <p>Uso de array</p><ul>
            <ul>
                <li>{libros[0]}</li>
                <li>{libros[1]}</li>
                <li>{libros[2]}</li>
            </ul>
            <p>Uso de map. Uso de if</p>
                      {libros.map((libro, indice) => {
                          return <li key={indice}>{libro}</li>;
                      })}
                  </ul>
            </>)
        : (<p>No hay libros</p>)
        }
    </div>
  )
}
