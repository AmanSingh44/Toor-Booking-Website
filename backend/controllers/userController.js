const User = require("../models/User");

//create new User
const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: err.message,
    });
  }
};

//update User
const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updates",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Try again",
      error: err.message,
    });
  }
};

//delete User
const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
      error: err.message,
    });
  }
};

//getSingle User
const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully selected",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found. Try again",
      error: err.message,
    });
  }
};

//getAll User
const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
};
