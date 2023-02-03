import React from 'react'
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

export const EjemploComponent = () => {

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, [])
  


  return (
    <div>Ejemplo useEffect y useLayoutEffect</div>
  )
}
