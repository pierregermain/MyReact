import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda,setBusqueda] = useState('');
  const [noEncontrado,setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    // Crear estado y actualizarlo para la palabra a ser buscada
    setBusqueda(e.target.value);

    // Filter el listado con mi palabra
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase())

    });

    // Devolver listado normal si no se realiza una busqueda
    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }
    else{
      setNoEncontrado(false);
    }
    
    console.log(pelis_encontradas);

    // Actualizar el estado del listado con la palabra filtrada
    setListadoState(pelis_encontradas);
  }

  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {(noEncontrado == true && busqueda.length > 3) && (
          <span className="no-encontrado">NO se ha encontrado ninguna coincidencia</span>
        )}
        <form>
            <input type="text" 
                  id="search_field" 
                  name="busqueda"
                  autoComplete='off'
                  onChange={buscarPeli}      
            />
            <button id="search">Buscar</button>
        </form>
    </div>
)
}
