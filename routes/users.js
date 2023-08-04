const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const router = express.Router();

/* GET all users list as admin */
router.get("/", verifyToken, isAdmin, userController.getAll);

//-------------------------------------------------------

/* get my profile as any role */
router.get("/profile", verifyToken, userController.userProfile);

//-------------------------------------------------------

/* update my profile as any role*/
router.post("/update-profile", verifyToken, userController.updateProfile);

//-------------------------------------------------------

/* create card */
router.post("/create-card", verifyToken, userController.createCard);

/* create task */
router.post("/create-task", verifyToken, userController.createTask);

//-------------------------------------------------------

/* find user Cards*/
router.get("/user-cards", verifyToken, userController.findUserCards);

/* find user Tasks*/
router.get("/user-tasks", verifyToken, userController.findUserTasks);

/* find user CardsTasks*/
router.get("/user-cards-tasks", verifyToken, userController.findUserCardsTasks);

//-------------------------------------------------------

/* find a Card */
router.get("/card/:id", verifyToken, userController.getCard);

/* find a Task */
router.get("/task/:id", verifyToken, userController.getTask);

//-------------------------------------------------------

/* update my card*/
router.post("/update-card/:id", verifyToken, userController.updateCard);

/* update my task*/
router.post("/update-task/:id", verifyToken, userController.updateTask);

module.exports = router;
