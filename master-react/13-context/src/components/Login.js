import React from 'react'
import { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  const {usuario,setUsuario} = useContext(PruebaContext);

  const guardarDatos = e => {
    e.preventDefault();

    let usuario = {
      username: e.target.username.value,
      name: e.target.name.value
    };

    setUsuario(usuario);
  }
  return (
    <div className="login-page" onSubmit={guardarDatos}>
      <h1>Login</h1>
      <form className='login-form'>
        <input type="text" name="username" placeholder='Introduce tu usuario' />
        <input type="text" name="name" placeholder='Introduce tu nombre' />
        <input type="submit" value="Enviar" />
      </form>

    </div>
  )
}
