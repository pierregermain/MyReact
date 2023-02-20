const express = require("express");
const router = express.Router();
const FollowController = require("../controller/followController");

// Definir routes
router.get("/prueba-follow", FollowController.pruebaFollow);

// Export routes
module.exports = router;