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
const detail = (req, res) => {

  // Sacar ID de la publicacion de la url
  const publicationId = req.params.id;

  // Find con la condicion del id
  Publication.findById(publicationId, (error, publicationStored) => {

    if(error || !publicationStored) {
      return res.status(404).send({
        status: "error",
        "message": "No existe la publicación"
      });
    }

    // Devolver respuesta
    return res.status(200).send({
      status: "success",
      message: "Mostrar publication",
      publication: publicationStored
    });

  });

}

// Borrar una publicacion
const remove = (req, res) => {

  // Sacar ID de la publicacion de la url
  const publicationId = req.params.id;

  // Find con la condicion del id
  Publication.find({ "user": req.user.id, "_id": publicationId }).remove (error => {

    if(error) {

      return res.status(500).send({
        status: "error",
        message: "No se ha podido borrar la publicación"
      });

    }
    // Devolver respuesta
    return res.status(200).send({
      status: "success",
      message: "Se ha borrado la publication",
      publication: publicationId
    });
  });
}

// Listar publicaciones

// Listar publicaciones de un usuario

// Subir ficheros

// Devolver ficheros

// Exportar acciones
module.exports = {
  pruebaPublication,
  save,
  detail,
  remove
}