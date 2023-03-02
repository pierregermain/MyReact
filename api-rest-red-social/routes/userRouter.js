const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
// Middleware de autentificación
const middlewareAuth = require("../middlewares/auth");

// Definir routes
// Prueba de token
router.get("/prueba-user", middlewareAuth.auth, UserController.pruebaUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);

// Export routes
module.exports = router;