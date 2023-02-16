import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { PeticionAjax } from '../../helpers/PeticionAjax'
import { Global } from '../../helpers/Global';

export const Editar = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("init");
  const [article, setArticule] = useState({});
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, [])

  const conseguirArticulo = async () => {
    const { data } = await PeticionAjax(Global.urlReadOne + params.id, "GET");

    if (data.status === "success") {
      setArticule(data.article);
    }
  }

  const editarArticulo = async (e) => {
    e.preventDefault();

    // Recoger datos formulario
    let nuevoArticulo = formulario;

    console.log(params.id);
    console.log(nuevoArticulo);

    // Guardar el artículo usando nuestra api
    const { data } = await PeticionAjax(Global.urlEdit + params.id, "PUT", nuevoArticulo);

    if (data.status == "success") {

      setResultado("success");

      const fileInput = document.querySelector("#file");

      // Subir imágen
      if (fileInput.files[0]) {

        const formData = new FormData();
        formData.append('file0', fileInput.files[0]);

        console.log(data);

        const subida = await PeticionAjax(Global.urlUploadImage + data.article.id, "POST", formData, true);

        console.log(subida);

        if (subida.data.status_img == "error" || subida.data.status == "error") {
          console.log('entra en error imagen');
          setResultado("errorimagen");
        } else {
          setResultado("success")
          console.log('entra en success imagen');
        }

      }
    }
    else {
      setResultado("error");
    }

  }

  return (
    <div className='jumbo'>

      <strong>{resultado == "success" ? "Artículo guardado correctamente." : ""}</strong>
      <strong>{resultado == "" ? "Error al guardar el artículo, quizás el título es demasiado corto" : ""}</strong>
      <strong>{resultado == "error" ? "Error al guardar el artículo, quizás el título es demasiado corto" : ""}</strong>
      <strong>{resultado == "errorimagen" ? "Error al guardar la imagen, quizás no es jpg ni png" : ""}</strong>

      <h2>Editar Artículo <i>{article.title}</i></h2>

      <form className='formulario' onSubmit={editarArticulo}>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type="text" name="title" placeholder='Título' onChange={cambiado} defaultValue={article.title} />
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <textarea name="content" placeholder="Contenido" onChange={cambiado} defaultValue={article.content} />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <div className='mask'>
            {article.image != "default.png" && <img src={Global.urlImage + article.image} />}
            {article.image == "default.png" && <img src="/src/assets/react.svg" />}
          </div>
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

