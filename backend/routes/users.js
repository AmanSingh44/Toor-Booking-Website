const express = require("express");
const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} = require("../controllers/userController");

const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getSingleUser);
router.get("/", verifyAdmin, getAllUser);

module.exports = router;
