import React from 'react'

export const Crear = () => {

    const title = 'Añadir pelicula';

    const getDataForm = e => {
        // Para que no se recargue la page
        e.preventDefault();

        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        console.log(target);
        alert('Formulario enviado');
    }

  return (
    <div className="add">
        <h3 className="title">{title}</h3>
        <form onSubmit={getDataForm}>
            <input type="text" 
                id="title" 
                name='title'
                placeholder="Titulo" />

            <textarea 
                id="description" 
                name='description'
                placeholder="Descripción">
            </textarea>

            <input type="submit" 
                id="save" 
                value="Guardar" />
        </form>
    </div>
  )
}
