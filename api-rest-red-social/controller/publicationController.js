const Publication = require("../models/publication");

// Acciones de prueba
const pruebaPublication = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde publicationController"
  })
}

// Guardar publicacion
const save = (req, res) => {

  // Recoger datos del body
  const params = req.body;
  if (!params.text) {
    return res.status(400).send({
      status: "error",
      message: "Debes enviar el texto de la publicación"
    });
  }

  // Crear y rellenar el objeto
  let publication = new Publication(params);
  publication.user = req.user.id;

  // Guardar objeto en db
  publication.save((error, publicationStored) => {
    if (error || !publicationStored) {
      return res.status(400).send({
        status: "error",
        "message": "No se ha guardado la publicacion"
      });
    }

    return res.status(200).send({
      status: "success",
      message: "Se ha guardado la publicación",
      publicationStored
    })
  });

}

// Obtener una publicacion

// Eliminar publicaciones

// Listar publicaciones

// Listar publicaciones de un usuario

// Subir ficheros

// Devolver ficheros

// Exportar acciones
module.exports = {
  pruebaPublication,
  save
}