import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {

  const [mostrar, setMostrar] = useState(false);
  const caja = useRef();
  const boton = useRef();

  // Cuando puedes notar que la carga va a ser mas lenta y se ve algún parpadeo usar "useLayoutEffect" que se ejecuta antes de renderizar
  useLayoutEffect(() => {
    console.log("useEffect: Componente cargado");
    if (caja.current == null) return

    const { bottom } = boton.current.getBoundingClientRect();

    caja.current.style.top = `${bottom + 45}px`;
    caja.current.style.left = `${bottom + 45}px`;

  }, [mostrar]);

  useEffect(() => {
    console.log("useEffect: Componente cargado");
    if(caja.current == null) return

    const { bottom } = boton.current.getBoundingClientRect();

    caja.current.style.top = `${bottom + 45}px`;
    caja.current.style.left = `${bottom + 45}px`;

  }, [mostrar]);

  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>

      <button ref={boton} onClick={() => setMostrar(prev => !prev)}>Mostrar Mensaje</button>

      {mostrar && (
        <div id="caja" ref={caja}>
          Hola soy un mensaje {mostrar}
        </div>
      )}

    </div>
  )
}
