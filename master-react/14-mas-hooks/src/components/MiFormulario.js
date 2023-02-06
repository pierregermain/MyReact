import React, { useState } from 'react'

export const MiFormulario = () => {


  const [formulario, setFormulario] = useState({});

  const enviado = (e) => {
    e.preventDefault();
    //console.log(e.target);

    let curso = {
      title: e.target.title.value,
      year:e.target.year.value,
      description:e.target.description.value,
      author:e.target.author.value,
      email:e.target.email.value
    }

    setFormulario(curso);
  }




  return (
    <div>

      <p>Formulario para guardar un curso</p>
      <p>Curso guardado:</p>

      <pre className='form-list'>{JSON.stringify(formulario)}</pre>

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
