const validator = require("validator");

const article = (req, res) => {
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

const create = (req, res) => {

  // Recoger parámetros por POST a guardar
  let parametros = req.body;

  // Validar los datos con el paquete validator
  try {

    let validar_title = !validator.isEmpty(parametros.title) &&
                          validator.isLength(parametros.title, {min: 5, max: 256});
    let validar_content = !validator.isEmpty(parametros.content);

    if(!validar_content || !validar_title) {
      throw new Error("No se ha validado la información");
    }

  } catch (error) {

    return res.status(400).json({
      status: "error",
      mensaje: "Error al validar los datos",
    })

  }



  // Crear el objeto a guardar

  // Asignar valores a objeto basado en el modelo

  // Guardar el artículo en la db

  // Devolver resultados
  return res.status(200).json({
    mensaje: "Articulo creado",
    parametros
  })
}


module.exports = {
  article,
  curso,
  create
}