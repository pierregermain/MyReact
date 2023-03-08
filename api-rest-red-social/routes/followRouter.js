const express = require("express");
const router = express.Router();
const FollowController = require("../controller/followController");
//const middlewareCheck = require("../middlewares/auth");

// Definir routes
router.get("/prueba-follow", FollowController.pruebaFollow);
//router.post("/save", middlewareCheck.auth, FollowController.save);

// Export routes
module.exports = router;