const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articleController");

// Rutas Get (obtener datos)
router.get("/hello", articleController.hello);
router.get("/curso", articleController.curso);
router.get("/read/:last?", articleController.read);
router.get("/readone/:id?", articleController.readone);
router.delete("/delete/:id?", articleController.remove);

// Rutas Post (crear datos)
router.post("/create", articleController.create);

module.exports = router;