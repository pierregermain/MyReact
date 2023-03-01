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
  console.log("params", params);

  // Validacion
  if (!params.name || !params.email || !params.password || !params.nick) {
    return res.status(400).json({
      status: "error",
      message: "Validación no correcta"
    });
  }

  // Control duplicados con el operador OR
  User.find({
    $or: [
      { email: params.email.toLowerCase() },
      { nick: params.nick.toLowerCase() },
    ]
  }).exec(async (error, users) => {

    if (error) return res.status(500).json({
      status: "error",
      message: "Error en la consulta de búsqueda de usuarios"
    });

    if (users && users.length >= 1) {
      return res.status(200).send({
        status: "success",
        message: "El usuario ya existe"
      })
    }

    // Cifrar contraseña
    let pwd_hashed = await (bcrypt.hash(params.password, 10));
    params.password = pwd_hashed;

    // Crear Objeto usuarios
    let user_to_save = new User(params);

    // Guardar Usuario en base de datos
    user_to_save.save((error, userStored) => {
      if (error) {
        return res.status(500).send({
          status: "error",
          message: "Error al comunicar petición de guardado de usuario en la DB"
        })
      }
      if (!userStored) {
        return res.status(500).send({
          status: "error",
          message: "Error al guardar usuario en la DB"
        })
      }
      else {
        return res.status(200).send({
          status: "success",
          message: "El usuario ha sido guardado en la db"
        })
      }
    })
  })
}

const login = (req, res) => {

  // Recoger params del body
  let params = req.body;


  // Validación
  if (!params.email || !params.password) {
    return res.status(400).send({
      status: "error",
      message: "Faltan datos por enviar"
    });
  }

  // Buscar en la db si existe el email
  User.findOne({ email: params.email }).select({"password": 0}).exec((error, user) => {
    if (error || !user) return res.status(404).send({
      status: "error",
      message: "No existe el usuario"
    });
    // Comprobar contraseña

    // Devolver Token si correcto

    // Devolver Datos usuario

    return res.status(200).send({
      status: "success",
      message: "Accion de login",
      user: user
    });

  });

}

// Exportar acciones
module.exports = {
  pruebaUser,
  register,
  login
}