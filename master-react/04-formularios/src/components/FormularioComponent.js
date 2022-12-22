import React from 'react'
import { useState } from 'react';

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        e.preventDefault();
        let datos = e.target;
        console.log(datos.nombre.value);

        let usuario = {
            nombre:datos.nombre.value,
            apellido:datos.apellido.value,
            genero:datos.genero.value,
            bio:datos.bio.value,
        }
        console.log(usuario);

        setUsuario(usuario);
    }

  return (
    <div>
        <h1>Formularios con react</h1>
        {usuario.bio && usuario.bio.length > 0 &&
            (
                <div className='info_usuario label'>
                    {usuario.nombre} {usuario.apellido} es {usuario.genero} y su biografia es: {usuario.bio}
                </div>
            )
        }
        <form onSubmit={conseguirDatosFormulario}>
            <input type="text" name='nombre' placeholder='Nombre'/>
            <input type="text" name='apellido' placeholder='Apellido'/>
            <select name='genero'>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea name='bio' placeholder='Biografia'></textarea>

            <input type="submit" value="Enviar" />

        </form>
    </div>
  )
}
