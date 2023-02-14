import React from 'react'
//import { useForm } from '../hooks/useForm';

export const Crear = () => {
  return (
    <div className='jumbo'>
      <h1>Crear artículo</h1>

      <form className='formulario'>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type="text" name="title"  placeholder='Titulo:' />
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Title</label>
          <textarea name="content"  placeholder="Contenido" />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <input type="file" name="file0" />
        </div>

        <div className='form-group'>

        <input classname='btn btn-sucess' type="submit" value="Send"></input>
        </div>

      </form>

    </div>
  )
}
