import React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { PeticionAjax } from '../../helpers/PeticionAjax'
import { Global } from '../../helpers/Global';

export const Crear = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("init");

  const guardarArticulo = async (e) => {
    e.preventDefault();

    // Recoger datos formulario
    let nuevoArticulo = formulario;

    // Guardar el artículo usando nuestra api
    const { data } = await PeticionAjax(Global.urlCreate, "POST", nuevoArticulo);

    if (data.status == "success") {
      setResultado("success");
    }
    else {
      setResultado("error");
    }

  }

  return (
    <div className='jumbo'>

      <strong>{resultado == "success" ? "Artículo guardado correctamente." : ""}</strong>
      <strong>{resultado == "error" ? "Error al guardar el artículo, quizás el título es demasiado corto" : ""}</strong>

      <h1>Crear Artículo</h1>

      <form className='formulario' onSubmit={guardarArticulo}>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type="text" name="title" placeholder='Título' onChange={cambiado} />
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Title</label>
          <textarea name="content" placeholder="Contenido" onChange={cambiado} />
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
