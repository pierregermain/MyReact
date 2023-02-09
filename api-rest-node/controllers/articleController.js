const Article = require("../models/Article");
const {validarArticulo} = require("../helpers/validar");

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

module.exports = {
  hello,
  curso,
  create,
  read,
  readone,
  remove,
  edit
}