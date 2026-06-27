const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
    const { username, email, number, location, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }
    const user = new User({ username, email, number, location, password });
    await user.save();
    const token = jwt.sign(
      { id: user._id, username: user.username, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: { id: user._id, username: user.username, email: user.email, number: user.number, location: user.location, isAdmin: user.isAdmin }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    const token = jwt.sign(
      { id: user._id, username: user.username, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: { id: user._id, username: user.username, email: user.email, number: user.number, location: user.location, isAdmin: user.isAdmin }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { username, cart } = req.body;
    const user = await User.findOneAndUpdate({ username }, { cart }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, cart: user.cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/order', async (req, res) => {
  try {
    const { username, order } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    user.orders.push(order);
    user.cart = [];
    await user.save();
    res.json({ success: true, message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;