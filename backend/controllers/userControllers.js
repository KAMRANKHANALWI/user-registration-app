const User = require("../models/userModel");

// Add a new user
exports.addUser = async (req, res) => {
  const { name, email, dateOfBirth } = req.body;

  if (!name || !email || !dateOfBirth) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newUser = await User.create({ name, email, dateOfBirth });
    res.status(201).json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists." });
    }
    res.status(500).json({ message: "Error creating user.", error: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users.", error: error.message });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, dateOfBirth } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, dateOfBirth },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User updated successfully!", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating user.", error: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user.", error: error.message });
  }
};
