// Acciones de prueba
const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde userController"
  });
}

// Acciones de prueba
const register = (req, res) => {
  // Recoger datos peticion

  // Validacion

  // Control duplicados

  // Cifrar contraseña

  // Guardar Usuario en base de datos

  return res.status(200).json({
    message: "Acción de registros de usuarios"
  });
}

// Exportar acciones
module.exports = {
  pruebaUser,
  register
}