import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Crear = ({setListadoState}) => {

    const title = 'Añadir pelicula';
    const [peliState,setPeliState] = useState({
        title:'',
        description:'',
    })

    const getDataForm = e => {
        // Para que no se recargue la page
        e.preventDefault();

        // Obtener datos del form y meter en objeto
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        let peli = {
            id: new Date().getTime(),
            title,
            description
        };

        setPeliState(peli);

        // Guardar en el local storage
        SaveInStorage("pelis",peli);

        setListadoState(elements => {
            return [...elements, peli];
        })

    }

  return (
    <div className="add">
        <h3 className="title">{title}</h3>
        <p><strong>
            {(peliState.title) && peliState.title+' se he creado.'}
        </strong></p>
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
