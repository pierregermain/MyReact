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

    if (error || !publicationStored) {
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
  Publication.find({ "user": req.user.id, "_id": publicationId }).remove(error => {

    if (error) {

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

// Listar publicaciones de un usuario
const user = (req, res) => {

  // Scar el id de usuario
  const userId = req.params.id;

  // Controlar la pagina
  let page = 1;

  if (req.params.page) {
    page = req.params.page
  }

  const itemsPerPage = 2;

  // Find, populate, ordnar y paginar
  Publication.find({ "user": userId })
    .sort("-created_at")// ordenamos descendientemente por created_at
    .populate('user', '-password -__v -role') // obtenemos datos del user y quitamos algunos campos
    .paginate(page, itemsPerPage, (error, publications, total) => {

      if (error || !publications || publications.length <= 0) {
        return res.status(404).send({
          status: "error",
          message: "No se han encontrado publicaciones"
        });
      }

      return res.status(200).send({
        status: "success",
        message: "Listado publicaciones de un usuario",
        page,
        total,
        pages: Math.ceil(total / itemsPerPage),
        publications,
      });

    });
}

const upload = (req, res) => {

  // Sacar publication id
  const publicationId = req.params.id;

  // Recoger el fichero de imágen y comprobar que existe
  if (!req.file) {
    return res.status(404).send({
      status: "error",
      message: "Petición no tiene fichero"
    })
  }

  // Conseguir el nombre del fichero
  let image = req.file.originalname;

  // Sacar la extensión del fichero
  const imageSplit = image.split("\.");
  const extension = imageSplit[1];

  // Comprobar extensión
  if (extension != "png" && extension != "jpg" && extension != "jpeg") {

    // Borrar fichero si no es imagen
    const filePath = req.file.path;
    const fileDeleted = fs.unlinkSync(filePath);

    return res.status(400).send({
      status: "error",
      message: "Extensión del fichero invalida"
    })
  }

  // Si es correcto hacer, guardar la imagen en DB
  Publication.findOneAndUpdate(
    { user: req.user.id, "_id":publicationId },
    { file: req.file.filename },
    { new: true },
    (error, publicationUpdated) => {
      
      if (error || !publicationUpdated) {
        return res.status(500).json({
          status: "error",
          message: "Error al enviar la publicación",
        });
      }

      // Devolver respuesta
      return res.status(200).send({
        status: "success",
        message: "Image has been uploaded",
        'user id': req.user.id,
        publication: publicationUpdated,
        file: req.file,
      });

  });
}

// Listar publicaciones de usuarios que seguimos


// Subir ficheros

// Devolver ficheros

// Exportar acciones
module.exports = {
  pruebaPublication,
  save,
  detail,
  remove,
  user,
  upload
}