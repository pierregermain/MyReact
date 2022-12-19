import React, {useEffect} from 'react'

export const AvisoComponent = () => {

  useEffect(() => {
    alert ('El componente se ha montado');

    // Al desmontar componente
    return () => {
      alert ('El componente se ha desmontado');
    };
  }, []);// Si usamos array vacio se ejecuta al montar componente

  return (
    <div>
        <hr></hr>
        <h3>Hola Pierre</h3>
        <button onClick={e => {
          alert('Bienvenido');
        }}>Mostrar alerta</button>
    </div>
  )
}
