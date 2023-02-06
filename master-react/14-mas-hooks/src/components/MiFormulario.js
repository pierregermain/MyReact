import React, { useState } from 'react'

export const MiFormulario = () => {


  const [formulario, setFormulario] = useState({});

  const serializeForm = (form) => {

    const formData = new FormData(form);
    const formObject = {};

    for(let [name,value] of formData){
      formObject[name] = value;
    }

    return formObject;
  }

  const enviado = (e) => {
    e.preventDefault();

    let curso = serializeForm(e.target);

    setFormulario(curso);
  }

  const cambiado = ({target}) => {
    const {name,value} = target;

    setFormulario({...formulario, [name]:value})
  }

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
