import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(({page = 1, mensaje}) => {

  const[empleados,setEmpleados] = useState([]);

  useEffect(() => {
    conseguirEmpleados(page);
    mensaje();
  },[page]);

  const conseguirEmpleados = async(page) => {
    const url = "https://reqres.in/api/users?page="+page;
    const peticion = await fetch(url);
    const {data: empleados} = await peticion.json();

    setEmpleados(empleados);

    console.log(empleados);
    console.log('Se ha ejecutado la petición ajax');
  }

  return (
    <div>
      <p>Mostrando página {page}</p>
      <ul className='empleados'>
        {
         empleados.map(empleado => {
          return <li key={empleado.id}>{empleado.first_name} {empleado.last_name}</li>
        })}    
      </ul>
    </div>
  )
}
);
