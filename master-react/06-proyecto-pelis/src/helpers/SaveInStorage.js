export const SaveInStorage = peli => {
    // Obtener pelis del local storage
    let pelis = JSON.parse(localStorage.getItem('pelis'));

    console.log(pelis);

    // Check si pelis es array
    if(Array.isArray(pelis)){
        console.log('añadir');
        // Añadir peli
        pelis.push(peli);
    }
    else{
        // Crear array nuevo
        pelis = [peli];
    }

    // Guardar en local storage
    localStorage.setItem('pelis', JSON.stringify([pelis]));
    console.log(pelis);

    // Optional: Devolver peli
    return peli;
}