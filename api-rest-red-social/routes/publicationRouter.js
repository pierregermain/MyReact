
const express = require("express");
const router = express.Router();
const PublicationController = require("../controller/publicationController");
const check = require("../middlewares/auth");

// Definir routes
router.get("/prueba-publication", PublicationController.pruebaPublication);
router.post("/save", check.auth, PublicationController.save);
router.get("/detail/:id", check.auth, PublicationController.detail);
router.delete("/remove/:id", check.auth, PublicationController.remove);
router.get("/user/:id", check.auth, PublicationController.user);

// Export routes
module.exports = router;