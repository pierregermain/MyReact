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




  return (
    <div>

      <p>Formulario para guardar un curso</p>
      <p>Curso guardado:</p>

      <p className='form-list'>{JSON.stringify(formulario)}</p>

      <form onSubmit={enviado}>
        
        <input type="text" name="title" placeholder='Titulo:' />
        <input type="number" name="year" placeholder='Año publicación:' />
        <textarea name="description" placeholder="Descripción" />
        <input type="text" name="author" placeholder='Autor:' />
        <input type="email" name="email" placehoder="Email:" />
        
        <input type="submit" value="send"></input>

      </form>


    </div>
  )
}
