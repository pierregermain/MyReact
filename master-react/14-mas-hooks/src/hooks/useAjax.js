import { useState, useEffect } from "react";

export const useAjax = (url) => {

  const [usuario, setUsuario] = useState({
    datos: null,
    cargando: true
  });

  const getUsuario = async () => {

    setUsuario({
      ...usuario,
      cargando: true
    });

    setTimeout(async () => {
      const peticion = await fetch(url);
      const { data } = await peticion.json();

      setUsuario({
        datos: data,
        cargando: false
      })

      //console.log(data);

    }, 1000);

  }

  useEffect(() => {
    getUsuario();
  }, [url]);

  return {
    datos: usuario.datos,
    cargando: usuario.cargando,
  }
}