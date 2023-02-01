import React, { useRef } from 'react'

export const Formulario = () => {

  const nombre = useRef();
  const apellidos = useRef();
  const email = useRef();
  const miCaja = useRef();

  const mostrar = e => {
    e.preventDefault();

    console.log(nombre.current.value);
    console.log(apellidos.current.value);
    console.log(email.current.value);

    console.log(miCaja);
    miCaja.current.classList.add('fondo-verde');
    miCaja.current.innerHTML = "Formulario enviado";
  }

  return (
    <div>

      <div className="miCaja" ref={miCaja}>
        <p>Pruebas con useRef</p>
      </div>

      <form onSubmit={mostrar}>
        <input type="text" placeholder='Nombre' ref={nombre}/><br/>
        <input type="text" placeholder='Apellidos' ref={apellidos}/><br/>
        <input type="email" placeholder='Correo Electrónico' ref={email} /><br/>

        <input type="submit" value="Enviar" /><br/>
      </form>

      <button onClick={() => nombre.current.select()}>Empezar a rellenar el formulario</button>
      
      
    </div>
  )
}
