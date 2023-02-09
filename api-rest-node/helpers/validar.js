const validator = require("validator");

const validarArticulo = (parametros) => {

  // Validar los datos con el paquete validator

  let validar_title = !validator.isEmpty(parametros.title) &&
    validator.isLength(parametros.title, { min: 5, max: 256 });
  let validar_content = !validator.isEmpty(parametros.content);

  if (!validar_content || !validar_title) {
    throw new Error("No se ha validado la información");
  }
}

module.exports = {
  validarArticulo
}
