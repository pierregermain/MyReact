import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {
    const [usuario,setUsuario] = useState('Pierre Germain');

    const modUsuario = e => {
        setUsuario(e.target.value);
    };

    useEffect(() => {
      console.log('has cargado el componente');
    
    }, [])
    
    useEffect(() => {
      console.log('has cambiado el usuario (o cargado el componente)');
    
    }, [usuario])
    
  return (
    <>
        <h1>El Efecto - Hook useEffect</h1>
        <strong>{usuario}</strong>
        <form>
            <input type="text" onChange={modUsuario} placeholder="Cambia nombre" />
        </form>
    </>
  )
}
