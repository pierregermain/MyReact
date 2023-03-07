const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("../services/jwt");
const mongoosePagination = require("mongoose-pagination");

// Acciones de prueba
const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde userController",
    usuario: req.user
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
  User.findOne({ email: params.email }).select().exec((error, user) => {
    if (error || !user) return res.status(404).send({
      status: "error",
      message: "No existe el usuario"
    });

    // Comprobar contraseña
    const pwd = bcrypt.compareSync(params.password, user.password);

    if (!pwd) return res.status(400).send({
      status: "error",
      message: "Contraseña no correcta"
    });

    // Devolver Token si correcto
    const token = jwt.createToken(user);

    // Devolver Datos usuario
    return res.status(200).send({
      status: "success",
      message: "Accion de login realizado correctamente",
      user: {
        id: user._id,
        name: user.name,
        nick: user.nick
      },
      token
    });
  });
}

const profile = (req, res) => {
  // Recibir el parámetro del ID del usuario por la url
  const id = req.params.id;

  // Consultar para saber los datos del usuario
  User.findById(id)
    .select({ password: 0, role: 0 })
    .exec((error, userProfile) => {
      if (error || !userProfile) {
        return res.status(404).send({
          status: "error",
          message: "El usuario no existe o ha habido un error"
        })
      }

      // Devolver el resultado
      return res.status(200).send({
        status: "success",
        user: userProfile
      })
    });
}

const list = (req, res) => {

  // Controlar en que pagina estamos
  let page = 1;
  if (req.params.page) {
    page = req.params.page;
  }
  page = parseInt(page);

  // Consulta con mongoose paginate
  let itemsPerPage = 5;

  User.find().sort('_id').paginate(page, itemsPerPage, (error, users, total) => {

    if (error || !users) {
      return res.status(404).send({
        status: "error",
        message: "Ha ocurrido un error al listar los usuarios",
        error
      })
    }

    // Devolver resultados
    return res.status(200).send({
      status: "success",
      message: "Ruta de listado de usuarios",
      users,
      page: page,
      itemsPerPage,
      total,
      pages: Math.ceil(total / itemsPerPage) //ceil sirve para redonderar hacia arriba
    });

  })

}

const update = (req, res) => {

  // Obtener info del usuario a actualizar
  const userIdentity = req.user; // Datos que tengo del usuario
  const userToUpdate = req.body; // Datos que me llegan por PUT del usuario para ser actualizados

  // Quitar campos que no se deberían actualizar
  delete userToUpdate.iat;
  delete userToUpdate.exp;
  delete userToUpdate.role;
  delete userToUpdate.image;

  // Comprobar si el usuario existe
  User.find({
    $or: [
      { email: userToUpdate.email.toLowerCase() },
      { nick: userToUpdate.nick.toLowerCase() },
    ]
  }).exec(async (error, users) => {

    if (error) {
      return res.status(500).json({
        status: "error",
        message: "Error en la consulta de búsqueda de usuarios"
      });
    }

    let userIsset = false; // El usuario no existe
    users.forEach(user => {
      if (user && user._id != userIdentity.id) {
        userIsset = true;
      }
    })


    if (userIsset) {
      return res.status(200).send({
        status: "success",
        message: "El usuario ya existe"
      })
    }


    // Cifrar contraseña
    if (userToUpdate.password) {
      let pwd_hashed = await (bcrypt.hash(userToUpdate.password, 10));
      userToUpdate.password = pwd_hashed;
    }

    // Buscar y Actualizar
    try {
      let userUpdated = await User.findByIdAndUpdate(userIdentity.id, userToUpdate, { new: true });

      if (!userUpdated) {
        return res.status(404).json({
          status: "error",
          message: "Error al buscar usuario a ser actualizado",
        });
      }

      // Devolver respuesta
      return res.status(200).send({
        status: "success",
        message: "Método de actualizar usuario",
        user_updated: userUpdated,
        //userIsset,
        //users,
      })
    }
    catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error al actualizar usuario",
      });

    }





  });

}

const upload = (req, res) => {
  return res.status(200).send({
    status: "success",
    message: "Upload image",
    'user id': req.user.id,
    file: req.file,
  })
}

// Exportar acciones
module.exports = {
  pruebaUser,
  register,
  login,
  profile,
  list,
  update,
  upload
}