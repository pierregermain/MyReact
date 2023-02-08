const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articleController");

// Rutas
router.get("/article", articleController.article);
router.get("/curso", articleController.curso);

module.exports = router;