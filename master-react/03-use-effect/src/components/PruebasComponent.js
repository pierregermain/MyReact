import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {
    const [usuario,setUsuario] = useState('Pierre Germain');

    const modUsuario = e => {
        setUsuario(e.target.value);
    };

    const [contador, setContador] = useState(0);

    useEffect(() => {
      console.log('has cargado el componente');
    
    }, [])
    
    useEffect(() => {
      setContador(contador+1);
      console.log('Contador: '+contador);
    }, [usuario])
    
  return (
    <>
        <h1>El Efecto - Hook useEffect</h1>
        <strong className={ contador >= 10 ? 'label-red' : 'label'}>{usuario}</strong>
        <form>
            <input type="text" onChange={modUsuario} placeholder="Cambia nombre" />
        </form>
    </>
  )
}
