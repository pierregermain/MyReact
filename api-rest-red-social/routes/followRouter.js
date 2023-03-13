const express = require("express");
const router = express.Router();
const FollowController = require("../controller/followController");
const middlewareAuth = require("../middlewares/auth");

// Definir routes
router.get("/prueba-follow", FollowController.pruebaFollow);
router.post("/save", middlewareAuth.auth, FollowController.save);
router.delete("/unfollow/:id", middlewareAuth.auth, FollowController.unfollow);

// Export routes
module.exports = router;