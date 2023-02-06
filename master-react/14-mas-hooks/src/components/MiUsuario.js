import React, { useEffect, useState } from 'react'

export const MiUsuario = () => {

  const [usuario, setUsuario] = useState({
    datos: null,
    cargando: true
  });

  const getUsuario = async (url) => {
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

  const getId = e => {
    let id = parseInt(e.target.value);
    let url = 'https://reqres.in/api/users/' + id;

    getUsuario(url);
  }

  useEffect(() => {
    getUsuario('https://reqres.in/api/users/2');
  }, []);



  return (
    <div>
      <h2>Usuario</h2>
      <div>
        {usuario.cargando ? 'Cargando...' : (
          <>
            <p>Datos del usuario</p>
            <ul>
              <li>{usuario?.datos?.first_name}</li>
              <li>{usuario?.datos?.last_name}</li>
            </ul>
          </>
        )}
      </div>

      <input type="number" name="id" onChange={getId} />

    </div>
  )
}
