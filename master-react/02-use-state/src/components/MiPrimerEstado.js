import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    const [ nombre, setNombre ] = useState("Pierre Germain");
    
    const cambiarNombre = e => {
        setNombre("Hans Trabajar");
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ cambiarNombre }>Cambiar</button>
    </div>
  )
}
