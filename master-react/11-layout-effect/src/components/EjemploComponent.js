import React from 'react'
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

export const EjemploComponent = () => {

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    let caja = document.querySelector("#caja");
    caja.innerHTML = "Hola desde LayoutEffect";
  }, []);

  useEffect(() => {
    console.log("useEffect");
    let caja = document.querySelector("#caja");
    caja.innerHTML = "Hola desde useEffect";
  }, [])
  


  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      <div id="caja">

      </div>

    </div>
  )
}
