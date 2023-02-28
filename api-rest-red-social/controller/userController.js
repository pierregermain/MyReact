const User = require("../models/userModel");

// Acciones de prueba
const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde userController"
  });
}

// Acciones de prueba
const register = (req, res) => {
  // Recoger datos peticion
  let params = req.body;
  console.log(params);

  // Validacion
  if (!params.name || !params.email || !params.password || !params.nick) {
    return res.status(400).json({
      status: "error",
      message: "Validación no correcta"
    });
  }
  // Crear Objeto usuarios
  let user_to_save = new User(params);

  // Control duplicados
  User.find({$or: [
    {email:user_to_save.email.toLowerCase()},
    {nick:user_to_save.nick.toLowerCase()},
  ]}).exec((error, users) => {
    if(error) return res.status(500).json({
      status: "error",
      message: "Error en la consulta de búsqueda de usuarios"
    });
    if(users && users.lenght >= 1){
      return res.status(200).send({
        status: "success",
        message: "El usuario ya existe"
      })
    }
  })

  // Cifrar contraseña

  // Guardar Usuario en base de datos

  return res.status(200).json({
    status: "success",
    message: "Acción de registros de usuarios",
    user_to_save
  });
}

// Exportar acciones
module.exports = {
  pruebaUser,
  register
}