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

    if (error || !followStored) {
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

const unfollow = (req, res) => {
  // Recoger el id del usuario identificado
  const userId = req.user.id;

  // Recoger el id del usuario que sigo y quiero dejar de seguir
  const followedId = req.params.id;

  // Find de las coincidencias
  Follow.find({
    "user": userId,
    "followed": followedId
  }).remove((error, followDeleted) => {

    if(error || !followDeleted){
    return res.status(500).send({
      status: "error",
      message: "Error al intentar dejar de seguir al usuario"
    });

    }

    // Hacer remove
    return res.status(200).send({
      status: "success",
      message: "Follow borrado correctamente",
      followDeleted
    });

  });



}

// Listado de usuarios que estoy siguiendo
// Acción listado de usuarios que un usuario está siguiendo
const following = (req, res) => {

  // Id del usuario identificado

  // Ver si llega el ID por params

  // Comprobar la pagina que me llega por params

  // Ver cuantos elementos quiero por página

  // Find a follow

  // Obtener datos de los usuarios

  // Paginar con mongoose



    return res.status(200).send({
      status: "success",
      message: "Listado de usuarios que estoy siguiendo"
    });

}

// Listado de usuarios que me siguen (mis seguidores)
// Acción listado de usuarios que siguen a un usuario
const followers = (req, res) => {


    return res.status(200).send({
      status: "success",
      message: "Listado de usuarios que me siguen"
    });

}

// Exportar acciones
module.exports = {
  pruebaFollow,
  save,
  unfollow,
  following,
  followers
}