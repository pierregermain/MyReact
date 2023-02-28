const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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

  // Control duplicados con el operador OR
  User.find({$or: [
    {email:params.email.toLowerCase()},
    {nick:params.nick.toLowerCase()},
  ]}).exec(async(error, users) => {
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

    // Cifrar contraseña
    let pwd_hashed = await(bcrypt.hash(params.password, 10));
    params.password = pwd_hashed;

    // Crear Objeto usuarios
    let user_to_save = new User(params);

    // Guardar Usuario en base de datos
    return res.status(200).json({
      status: "success",
      message: "Acción de registros de usuarios",
      user_to_save
    });


  })



}

// Exportar acciones
module.exports = {
  pruebaUser,
  register
}