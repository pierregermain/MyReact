import React from 'react'

export const Editar = ({peli}) => {
    const title_comp = "Editar pelicula";
  return (
    <div className='edit_form'>
        <h3 className='title'>{title_comp}</h3>
        <form>
            <input type="text" 
                id="title" 
                name='title'
                placeholder="Titulo" 
                defaultValue={peli.title}/>

            <textarea 
                id="description" 
                name='description'
                placeholder="Descripción"
                defaultValue={peli.description}>
            </textarea>

            <input type="submit" 
                id="update" 
                value="Actualizar" />
        </form>
    </div>
  )
}
