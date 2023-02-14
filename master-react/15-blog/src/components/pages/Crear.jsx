import React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const Crear = () => {

  const {formulario, enviado, cambiado} = useForm({});

  const guardarArticulo = (e) => {
    e.preventDefault();

    // Recoger datos formulario
    let nuevoArticulo = JSON.stringify(formulario);
    console.log(nuevoArticulo);
  }

  return (
    <div className='jumbo'>

      <h1>Crear artículo</h1>


      <form className='formulario' onSubmit={guardarArticulo}>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type="text" name="title"  placeholder='Título' onChange={cambiado} />
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Title</label>
          <textarea name="content"  placeholder="Contenido" onChange={cambiado} />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <input type="file" name="file0" id="file" onChange={cambiado} />
        </div>

        <div className='form-group'>

        <input className='btn btn-sucess' type="submit" value="Send"></input>
        </div>

      </form>

      <pre>{JSON.stringify(formulario)}</pre>


    </div>
  )
}
