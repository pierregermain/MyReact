const Follow = require("../models/followModel");
const User = require("../models/userModel");

// Acciones de prueba
const pruebaFollow = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde followController"
  })
}
// Acción de guardar un follow (Accion seguir)
const save = (req,res) => {
  return res.status(200).send({
    status: "success",
    message: "Método seguir"
  })
}

// Acción de borrar un follow (Accion de dejar de seguir)

// Acción listado de usuarios que estoy siguiendo

// Acción listado de usuarios que me siguien

// Exportar acciones
module.exports = {
  pruebaFollow,
  save
}