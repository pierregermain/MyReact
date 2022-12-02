// Importar modules react y dependencias
import React from "react";

// Funciones del componente
const MiComponente = () => {

    const nombre = "Pierre";

    let usuario = {
        nombre: nombre,
        apellido: 'Groening',
    }

    return (
        <div className="mi-componente">
            <p>Mi primer componente</p>
            <ul>
              <li>Variable simple: {nombre}</li>
              <li>Objeto.campo: <strong>{JSON.stringify(usuario.apellido)}</strong></li>
            </ul>
        </div>
    );
};

// Export
export default MiComponente;