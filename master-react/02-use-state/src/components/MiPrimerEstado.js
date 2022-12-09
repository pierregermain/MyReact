import React from 'react'

export const MiPrimerEstado = () => {
    let nombre = "Pierre";

    const cambiarNombre = e => {
        nombre = "Hans";
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={cambiarNombre}>Cambiar</button>
    </div>
  )
}
