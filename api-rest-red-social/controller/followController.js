const Follow = require("../models/followModel");
const User = require("../models/userModel");

// Acciones de prueba
const pruebaFollow = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde followController"
  })
}
// Acción de guardar un follow (Accion seguir)
const save = (req, res) => {
  const params = req.body;

  // Sacar el id del usuario dentificado
  const identity = req.user;

  // Crear objeto model
  let userToFollow = new Follow({
    user: identity.id,
    followed: params.followed
  });
  console.log(params);

  // Guardar objeto en db
  userToFollow.save((error, followStored) => {

    console.log(followStored);

    if(error || !followStored){
    return res.status(500).send({
      status: "error",
      message: "No se ha podido seguir al usuario"
    })

    }
    return res.status(200).send({
      status: "success",
      identity: req.user,
      follow: followStored
    })

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