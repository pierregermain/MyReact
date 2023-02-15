const fs = require("fs");
const path = require("path");
const Article = require("../models/Article");
const { validarArticulo } = require("../helpers/validar");

const hello = (req, res) => {
  return res.status(200).json({
    mensaje: "Hello World"
  });
}

const curso = (req, res) => {
  return res.status(200).json(
    {
      curso: "Master en React",
      autor: "Victor"
    }
  );
}

const remove = (req, res) => {
  // Recoger id por la url
  let id = req.params.id;

  Article.findOneAndDelete({ _id: id }, (error, articuloBorrado) => {
    // Si no existe devolver error
    if (error || !articuloBorrado) {
      return res.status(500).json({
        status: "error",
        mensaje: "No existe el artículo a ser borrado",
      });
    }
    return res.status(200).json({
      status: "success",
      mensaje: "Artículo borrado",
      id
    });
  });
};

const readone = (req, res) => {
  // Recoger id por la url
  let id = req.params.id;

  // Buscar artículo
  Article.findById(id, (error, article) => {
    // Si no existe devolver error
    if (error || !article) {
      return res.status(404).json({
        status: "error",
        mensaje: "No existe el artículo buscado",
      });
    }

    // Si existe devolver resultado

    return res.status(200).json({
      status: "success",
      parameter: req.params.id,
      article
    });

  });
};

const edit = (req, res) => {
  // Recoger id por la url
  let id = req.params.id;

  // Recoger datos del body
  let parametros = req.body;

  // Validar los datos con el paquete validator
  try {
    validarArticulo(parametros);

  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Error al validar los datos al editar el artículo",
    });
  }


  // Buscar artículo
  Article.findOneAndUpdate({ _id: id }, req.body, { new: true }, (error, articuloActualizado) => {

    if (error || !articuloActualizado) {
      return res.status(500).json({
        status: "error",
        mensaje: "No hay articulo que editar",
      });
    }

    return res.status(200).send({
      status: "success",
      articulo: articuloActualizado,
    })

  });

}


const read = (req, res) => {
  let consulta = Article.find({});

  if (req.params.last) {
    consulta.limit(req.params.last);
  }


  consulta.sort({ date: -1 })
    .exec((error, articles) => {

      if (error || !articles) {
        return res.status(404).json({
          status: "error",
          mensaje: "No hay datos que listar",
        });
      }

      return res.status(200).send({
        status: "success",
        parameter: req.params.last,
        length: articles.length,
        articles
      })
    });
}

const create = (req, res) => {

  // Recoger parámetros por POST a guardar
  let parametros = req.body;

  // Validar los datos con el paquete validator
  try {
    validarArticulo(parametros);

  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Error al validar los datos al crear el artículo",
    });
  }

  // Crear el objeto a guardar sin asignar valores
  //const article = new Article(parametros);

  // Asignar valores a objeto basado en el modelo (manual)
  //article.title = parametros.title;

  // Crear el objeto a guardar y asignar valores de manera automática
  const article = new Article(parametros);

  // Guardar el artículo en la db
  article.save((error, articuloGuardado) => {

    if (error || !articuloGuardado) {
      return res.status(400).json({
        status: "error",
        mensaje: "No ha sido posible guardar el artículo en la db",
      })
    }

    // Devolver resultados
    return res.status(200).json({
      status: "success",
      mensaje: "Artículo creado correctamente",
      article: articuloGuardado,
    });

  });

}

const uploadImage = (req, res) => {

  // Configurar multer (se hace desde el articleRouter.js)

  // Recoger el fichero de imágen
  if (!req.file && !req.files) {
    return res.status(400).json({
      message: "No se ha subido ningún fichero",
      status: "error",
      status_img: "error"
    })
  }

  // Nombre del fichero
  let archivo = req.file.originalname;

  // Extensión del fichero
  let archivoSplit = archivo.split("\.");
  let extension = archivoSplit[1];

  // Borrar archivo si no es jpg ni png
  if (extension != 'png' && extension != 'jpg' && extension != 'jpeg') {
    fs.unlink(req.file.path, (error) => {
      return res.status(400).json({
        status: "error",
        status_img: "error",
        message: "El fichero subido tiene que ser png o jpg"
      })
    })
  }
  else {

    // Actualizar artículo

    // Recoger id por la url
    let id = req.params.id;

    // Buscar artículo
    Article.findOneAndUpdate({ _id: id }, { image: req.file.filename }, { new: true }, (error, articuloActualizado) => {

      if (error || !articuloActualizado) {
        return res.status(500).json({
          status: "error",
          status_img: "error",
          mensaje: "No hay articulo que editar"
        });
      }

      return res.status(200).send({
        status: "success",
        status_img: "success",
        articulo: articuloActualizado,
        file: req.file
      })
    });
  }
}

const image = (req, res) => {
  let fichero = req.params.file;
  let ruta_fisica = "./images/articles/" + fichero;

  fs.stat(ruta_fisica, (error, existe) => {
    if (existe) {
      return res.sendFile(path.resolve(ruta_fisica));
    }
    else {
      return res.status(404).json({
        status: "error",
        mensaje: "No se encontró fichero en la ruta especificada",
        status_img: "error"
      });
    }
  })
}

const search = (req, res) => {
  // Sacar el string de búsqueda
  let search = req.params.search;

  // Find a la db con OR
  Article.find({
    "$or": [
      { "title": { "$regex": search, "$options": "i" } },
      { "content": { "$regex": search, "$options": "i" } }
    ]
  })
    // Ordenar 
    .sort({ date: -1 })
    // Ejecutar consulta
    .exec((error, articulosEncontrados) => {
      if (error || !articulosEncontrados || articulosEncontrados.length <= 0) {
        return res.status(404).json({
          status: "error",
          mensaje: "No se han encontrado artículos"
        })
      }
      else {
        // Devolver resultados
        return res.status(200).json({
          status: "success",
          articulosEncontrados
        })
      }
    })
};

module.exports = {
  hello,
  curso,
  create,
  read,
  readone,
  remove,
  edit,
  uploadImage,
  image,
  search
}