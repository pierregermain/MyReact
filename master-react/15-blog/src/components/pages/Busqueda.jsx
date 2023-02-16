import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PeticionAjax } from '../../helpers/PeticionAjax';
import { Global } from '../../helpers/Global';
import { Listado } from './Listado';

export const Busqueda = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    //console.log(params);
    conseguirArticulos();
  }, []);

  useEffect(() => {
    //console.log(params);
    conseguirArticulos();
  }, [params]);

  const conseguirArticulos = async () => {

    const { data, cargando } = await PeticionAjax(Global.urlSearch+params.busqueda, "GET");

    if (data.status === "success") {
      setArticulos(data.articles);
    }
    else {
      setArticulos([]);
    }

    setCargando(false);

  };

  return (
    <>
      {cargando ? "Cargando..." :
        articulos.length >= 1 ?
            <Listado articulos={articulos} setArticulos={setArticulos} />
            : <h1> No hay artículos</h1>
      }
    </>
  )
}