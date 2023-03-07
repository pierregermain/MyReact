const Follow = require("../models/followModel");
const User = require("../models/userModel");

// Acciones de prueba
const pruebaFollow = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde followController"
  })
}

// Exportar acciones
module.exports = {
  pruebaFollow
}