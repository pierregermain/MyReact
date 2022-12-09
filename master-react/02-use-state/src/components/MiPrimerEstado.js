import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    const [ nombre, setNombre ] = useState("Pierre Germain");

    const cambiarNombre = (e, nombreFijo) => {
        console.log(e.target.value);
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

        &nbsp;
        <input type='text' onChange={ e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre' />

        &nbsp;
        <input type='text' onKeyUp={ e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre' />
    </div>
  )
}
