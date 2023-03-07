const express = require("express");
const router = express.Router();
const multer = require("multer");
const UserController = require("../controller/userController");

// Middleware de autentificación
const middlewareAuth = require("../middlewares/auth");

// Configuración de subida de ficheros
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/avatars/")
  },
  filename: (req, file, cb) => {
    cb(null, "avatar-"+Date.now()+"-"+file.originalname);
  }
});

// Middleware uploads
const middlewareUploads = multer({storage});

// Definir routes

// Prueba de token
router.get("/prueba-user", middlewareAuth.auth, UserController.pruebaUser);

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/upload", [middlewareAuth.auth, middlewareUploads.single("file0")], UserController.upload);

router.get("/profile/:id", middlewareAuth.auth, UserController.profile);
router.get("/list/:page?", middlewareAuth.auth, UserController.list);
router.get("/avatar/:file", middlewareAuth.auth, UserController.avatar);

router.put("/update", middlewareAuth.auth, UserController.update);

// Export routes
module.exports = router;