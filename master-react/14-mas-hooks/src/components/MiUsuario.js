import React, { useState } from 'react'

export const MiUsuario = () => {

  const [usuario,setUsuario] = useState({
    datos: null
  });

  const getUsuario = async(url) => {
    const peticion = await fetch(url);
    const {data} = await peticion.json();

    setUsuario({
      datos: data
    })

    console.log(data);

  }

  const getId = e => {
    let id = parseInt(e.target.value);
    let url = 'https://reqres.in/api/users/'+id;

    getUsuario(url);
  }

  

  return (
    <div>
      <h2>Usuario</h2>
      <p>Datos del usuario</p>
      <ul>
        <li>{usuario?.datos?.first_name}</li>
        <li>{usuario?.datos?.last_name}</li>
      </ul>
      <input type="number" name="id" onChange={getId} />

    </div>
  )
}
