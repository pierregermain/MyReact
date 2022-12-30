export const SaveInStorage = (key,element) => {
    // Obtener pelis del local storage
    let elements = JSON.parse(localStorage.getItem(key));

    // Check si elements es array
    if(Array.isArray(elements)){
        // Añadir peli
        elements.push(element);
    } else{
        // Crear array nuevo
        elements = [element];
    }

    // Guardar en local storage
    localStorage.setItem(key, JSON.stringify(elements));

    // Optional: Devolver elemento
    return element;
}