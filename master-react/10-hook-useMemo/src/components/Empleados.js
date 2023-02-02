import React from 'react'

export const Empleados = React.memo(() => {
  console.log('Hola mundo desde listado de empleados');
  return (
    <div>Empleados</div>
  )
})
