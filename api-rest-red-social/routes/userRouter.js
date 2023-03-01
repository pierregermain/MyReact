const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");

// Definir routes
router.get("/prueba-user", UserController.pruebaUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);

// Export routes
module.exports = router;