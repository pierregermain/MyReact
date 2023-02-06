import React, { useEffect, useState } from 'react'
import { useAjax } from '../hooks/useAjax';

export const MiUsuario = () => {

  const [url,setUrl] = useState("https://reqres.in/api/users/1");

  const {datos, cargando} = useAjax(url);

  const getId = e => {
    let id = parseInt(e.target.value);
    setUrl('https://reqres.in/api/users/' + id);
  }

  return (
    <div>
      <h2>Usuario</h2>
      <div>
        {cargando ? 'Cargando...' : (
          <>
            <p>Datos del usuario</p>
            <ul>
              <li>{datos?.first_name}</li>
              <li>{datos?.last_name}</li>
            </ul>
          </>
        )}
      </div>

      <input type="number" name="id" onChange={getId} />

    </div>
  )
}
