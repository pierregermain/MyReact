const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const Auth = require("../middlewares/auth");

// Definir routes
router.get("/prueba-user", Auth.auth, UserController.pruebaUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);

// Export routes
module.exports = router;