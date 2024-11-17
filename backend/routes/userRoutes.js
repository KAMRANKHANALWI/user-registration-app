const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

// Add a new user
router.post("/", userController.addUser);

// Get all users
router.get("/", userController.getAllUsers);

// Update a user
router.put("/:id", userController.updateUser);

// Delete a user
router.delete("/:id", userController.deleteUser);

module.exports = router;
