const asyncHandler = require("express-async-handler");

const { generateToken } = require("../utils/generateToken");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, pass, isAdmin } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(404).json({ status: 404 });
  }

  const user = await User.create({
    name,
    email,
    pass,
    isAdmin,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      status: 201,
    });
  }
});
const authUser = asyncHandler(async (req, res) => {
  const { email, pass } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(pass))) {
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
      status: 200,
    });
  } else {
    return res.status(401).json({ status: 401 });
  }
});
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
    });
  } else {
    res.status(404).json(0);
  }
});
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description } = req.body;

  const product = await Product.create({
    name,
    price,
    description,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      price: product.price,
      description: product.description,
      status: 201,
    });
  } else {
    res.status(404).json({ status: 404 });
  }
});

module.exports = { registerUser, authUser, getUserProfile, createProduct };
