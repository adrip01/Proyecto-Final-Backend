const userController = {};

userController.getAll = require("./getAll");
userController.userProfile = require("./userProfile");
userController.updateProfile = require("./updateProfile");
userController.createCard = require("./createCard");
userController.createTask = require("./createTask");
userController.findUserCardsTasks = require("./findUserCardsTasks");

module.exports = userController;
