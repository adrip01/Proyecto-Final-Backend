const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const router = express.Router();

/* GET all users list as admin */
router.get("/", verifyToken, isAdmin, userController.getAll);

/* acces my profile as any role */
router.get("/profile", verifyToken, userController.userProfile);

/* update my rpfoile as any role*/
router.post("/update-profile", verifyToken, userController.updateProfile);

/* create card */
router.post("/create-card", verifyToken, userController.createCard);

module.exports = router;
