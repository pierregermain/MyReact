const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articleController");

// Rutas Hello World
router.get("/hello", articleController.hello);
router.get("/curso", articleController.curso);

// Rutas GET (obtener datos)
router.get("/read/:last?", articleController.read);
router.get("/readone/:id?", articleController.readone);

// Rutas Delete (borrar datos)
router.delete("/delete/:id?", articleController.remove);

// Rutas PUT (editar datos)
router.put("/edit/:id?", articleController.edit);

// Rutas POST (crear datos)
router.post("/create", articleController.create);
router.post("/upload-image/:id", articleController.uploadImage);

module.exports = router;