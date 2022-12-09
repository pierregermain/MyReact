import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    const [ nombre, setNombre ] = useState("Pierre Germain");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e, "Hans") }>Cambiar nombre por Hans</button>
    </div>
  )
}
