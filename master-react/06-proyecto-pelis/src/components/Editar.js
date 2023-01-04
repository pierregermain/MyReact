import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar pelicula";
    
    const guardarEdicion = (e, id) => {

        e.preventDefault();

        // Form actual
        let target = e.target;

        // Todas las pelis en forma de array
        const pelis_almacenadas = conseguirPeliculas();
        console.log(pelis_almacenadas);

        // Buscamos en el array el index de nuestro elemento
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        // Creamos objeto peli con el index
        let peli_actualizada = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        console.log(indice, peli_actualizada);

        // Actualizar datos
        pelis_almacenadas[indice] = peli_actualizada;

        console.log(pelis_almacenadas);

        // Guardar el nuevo array de objetos en el localstorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        // Actualizar UI
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }
    

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>

        <form onSubmit={ e => guardarEdicion(e, peli.id)}>
            <input type="text" 
                name='title'
                className="titulo_editado" 
                defaultValue={peli.title} />

            <textarea 
                name='description'
                defaultValue={peli.description}
                className='description_editado'>
            </textarea>

            <input type="submit" 
                className="editar" 
                value="Actualizar" />
        </form>

    </div>
  )
}
