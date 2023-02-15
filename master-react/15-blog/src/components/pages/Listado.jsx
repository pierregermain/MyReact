import React from 'react'
import { Global } from '../../helpers/Global';
import { PeticionAjax } from '../../helpers/PeticionAjax';

export const Listado = ({articulos, setArticulos}) => {

  const eliminar = async(id) => {

    let {data} = await PeticionAjax(Global.urlDelete+id,"DELETE");

    console.log(data);

    if(data.status === "success"){
      let articulosActualizados = articulos.filter(articulo => articulo._id !== id);

      setArticulos(articulosActualizados);

    }


  };

  return (

            articulos.map(articulo => {
              return (
                <article key={articulo._id} className="articulo-item">
                  <div className='mask'>
                    {articulo.image != "default.png" && <img src={Global.urlImage + articulo.image} />}
                    {articulo.image == "default.png" && <img src="/src/assets/react.svg" />}
                  </div>
                  <div className='datos'>
                    <h3 className="title">{articulo.title}</h3>
                    <p className="description">{articulo.content}</p>
                    <button className="edit">Editar</button>
                    <button className="delete" onClick={() => {
                      eliminar(articulo._id);
                      }}>Borrar</button>
                  </div>
                </article>
              );
            })
  )
}
