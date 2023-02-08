const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articleController");

// Rutas
router.get("/ruta-de-prueba", articleController.test);

module.exports = router;