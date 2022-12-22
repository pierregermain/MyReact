import React from 'react'

export const FormularioComponent = () => {

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
    }

  return (
    <div>
        <h1>Formularios con react</h1>
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
