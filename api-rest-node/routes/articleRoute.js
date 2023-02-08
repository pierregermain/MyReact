const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articleController");

// Rutas Get (obtener datos)
router.get("/article", articleController.article);
router.get("/curso", articleController.curso);

// Rutas Post (crear datos)
router.post("/create", articleController.create)

module.exports = router;