import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const MiFormulario = () => {

  const {formulario, enviado, cambiado} = useForm({});

  return (
    <div>

      <p>Formulario para guardar un curso</p>
      <p>Curso guardado: <strong>{formulario.title}</strong></p>

      <p className='form-list'>{JSON.stringify(formulario)}</p>

      <form onSubmit={enviado}>
        
        <input type="text" name="title" onChange={cambiado} placeholder='Titulo:' />
        <input type="number" name="year" onChange={cambiado} placeholder='Año publicación:' />
        <textarea name="description" onChange={cambiado} placeholder="Descripción" />
        <input type="text" name="author" onChange={cambiado} placeholder='Autor:' />
        <input type="email" name="email" onChange={cambiado} placehoder="Email:" />
        
        <input type="submit" value="Send"></input>

      </form>


    </div>
  )
}
