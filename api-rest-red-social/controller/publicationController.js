// Acciones de prueba
const pruebaPublication = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde publicationController"
  })
}

// Guardar publicacion

// Obtener una publicacion

// Eliminar publicaciones

// Listar publicaciones

// Listar publicaciones de un usuario

// Subir ficheros

// Devolver ficheros

// Exportar acciones
module.exports = {
  pruebaPublication
}