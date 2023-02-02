import React, { useEffect, useState } from 'react'

export const Empleados = () => {

  const[empleados,setEmpleados] = useState();

  useEffect(() => {
    conseguirEmpleados();
  },[]);

  const conseguirEmpleados = async() => {
    const url = "https://reqres.in/api/users?page=2";
    const peticion = await fetch(url);
    const {data: empleados} = await peticion.json();

    setEmpleados(empleados);

    console.log(empleados);
    console.log('Se ha ejecutado la petición ajax');
  }

  console.log('Hola mundo desde listado de empleados');


  return (
    <div>
      <ul className='empleados'>
        {
         empleados?.map(empleado => {
          return <li key={empleado.id}>{empleado.first_name} {empleado.last_name}</li>
        })}    
      </ul>
    </div>
  )
}
