// Importar modules react y dependencias
import React from "react";

// Funciones del componente
const MiComponente = () => {

    const nombre = "Pierre";
    const web = "github.com";
    let usuario = {
        nombre: nombre,
        apellido: 'Groening',
        web: web
    }

    console.log(usuario);

    return (
        <div className="mi-componente">
            <hr></hr>
            <p>Mi primer</p>
            <p>componente</p>
            <ul>
              <li>Variable simple: {nombre}</li>
              <li>Objeto.campo: <strong>{JSON.stringify(usuario.apellido)}</strong></li>
              <li>Objeto: <strong>{JSON.stringify(usuario)}</strong></li>
            </ul>
        </div>
    );
};

// Export
export default MiComponente;