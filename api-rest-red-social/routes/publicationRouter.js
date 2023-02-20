
const express = require("express");
const router = express.Router();
const PublicationController = require("../controller/publicationController");

// Definir routes
router.get("/prueba-publication", PublicationController.pruebaPublication);

// Export routes
module.exports = router;