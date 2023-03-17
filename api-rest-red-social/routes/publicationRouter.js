
const express = require("express");
const router = express.Router();
const PublicationController = require("../controller/publicationController");
const check = require("../middlewares/auth");

// Definir routes
router.get("/prueba-publication", PublicationController.pruebaPublication);
router.get("/save", check.auth, PublicationController.save);

// Export routes
module.exports = router;