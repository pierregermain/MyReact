import React from 'react'

//export const Editar = ({peli, getPelis, setEditar, setListadoState}) => {
export const Editar = ({peli}) => {
//export const Editar = () => {
    const titulo_componente = "Editar pelicula";
    
    const guardarEdicion = (e, id) => {

        e.preventDefault();

        alert(id);

        /*
        // Form actual
        let target = e.target;

        // Todas las pelis en forma de array
        const pelis_almacenadas = getPelis();

        // Buscamos en el array el index de nuestro elemento
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        // Creamos objeto peli con el index
        let peli_update = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        //console.log(index, peli);

        // Actualizar datos
        pelis_almacenadas[indice] = peli_update;

        // Actualizar local storage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        setListadoState(pelis_almacenadas);
        setEditar(0);
        */
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
