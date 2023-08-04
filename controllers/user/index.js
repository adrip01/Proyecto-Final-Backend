const userController = {};

userController.getAll = require("./getAll");
userController.userProfile = require("./userProfile");
userController.updateProfile = require("./updateProfile");
userController.createCard = require("./createCard");
userController.createTask = require("./createTask");
userController.findUserCards = require("./findUserCards");
userController.findUserTasks = require("./findUserTasks");
userController.findUserCardsTasks = require("./findUserCardsTasks");
userController.updateCard = require("./updateCard");
userController.updateTask = require("./updateTask");

module.exports = userController;
