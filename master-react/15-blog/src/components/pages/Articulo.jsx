import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PeticionAjax } from '../../helpers/PeticionAjax';
import { Global } from '../../helpers/Global';
import { Listado } from './Listado';

export const Articulo = () => {

  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {

    const { data, cargando } = await PeticionAjax(Global.urlReadOne + params.id, "GET");

    console.log(data);

    if (data.status === "success") {
      setArticulo(data.article);
    }

    setCargando(false);

  };

  return (
    <div className='jumbo'>
      {cargando ? "Cargando..." :
        (
          <>
            <h1>{articulo.title}</h1>
            <p>{articulo.content}</p>
            <span>{articulo.date}</span>
            <div className='mask'>
              {articulo.image != "default.png" && <img src={Global.urlImage + articulo.image} />}
              {articulo.image == "default.png" && <img src="/src/assets/react.svg" />}
            </div>
          </>
        )
      }
    </div>
  )
}
