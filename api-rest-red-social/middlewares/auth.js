// Importar modules
import jwt from "jwt-simple";
import moment from "moment";

// Importar clave secreta
import { secret as _secret } from "../services/jwt";
const secret = _secret;

// Función tipo middleware de authentication
exports.auth = (req, res, next) => {
  // Comprobar si me llega la cabecera de auth
  if (!req.headers.authorization) {
    return res.status(403).send({
      status: "error",
      message: "La petición no tiene la cabecera de autentificación"
    });
  }

  // Limpiar el token
  let token = req.headers.authorization.replace(/['"]+/g, '');

  // Decodificar token
  try {
    let payload = jwt.decode(token, secret);

    // Comprobar expiración
    if (payload.exp <= moment().unix()) {
      return res.status(404).send({
        status: "error",
        message: "Token expirado"
      });

    }
  }
  catch {
    return res.status(404).send({
      status: "error",
      message: "Token no valido (el siguiente error message no se deberia mostrar al usuario)",
      error
    })
  }

  // Agregar datos de usuario a request
  req.user = payload;

  // Pasar a siguiente acción
  next();

}