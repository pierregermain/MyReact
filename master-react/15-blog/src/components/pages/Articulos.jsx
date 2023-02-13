import React from 'react'
import { useState, useEffect } from 'react';
import { PeticionAjax } from '../../helpers/PeticionAjax';
import { Global } from '../../helpers/Global';
import { Listado } from './Listado';

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {

    const { data, cargando } = await PeticionAjax(Global.urlRead, "GET");

    //console.log(data);
    //console.log(cargando);

    if (data.status === "success") {
      setArticulos(data.articles);
    }

    setCargando(false);

  };

  return (
    <>
      {cargando ? "Cargando..." :
        (
          articulos.length >= 1 ?
            (
              <Listado articulos={articulos} />
            )
            :
            (
              <h1> No hay artículos</h1>
            )
        )
      }
    </>
  )
}
