const express = require("express");
const {
  registerUser,
  authUser,
  getUserProfile,
  createProduct,
} = require("../controller/userController");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();
router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/create").post(protect, isAdmin, createProduct);
module.exports = router;
