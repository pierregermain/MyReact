const express = require("express");
const router = express.Router();
const multer = require("multer");

const articleController = require("../controllers/articleController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/articles')
  },
  filename: (req, file, cb) => {
    cb(null, "article" + Date.now() + file.originalname)
  }
})

const uploads = multer({storage: storage});


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
router.post("/upload-image/:id", [uploads.single("file0")], articleController.uploadImage);

module.exports = router;