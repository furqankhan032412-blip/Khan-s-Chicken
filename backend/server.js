const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory database (no MongoDB installation needed!)
const users = [];

// ===== REGISTER =====
app.post('/api/register', (req, res) => {
  const { username, email, number, location, password } = req.body;
  
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ success: false, message: 'Username already exists' });
  }
  
  const user = { 
    username, 
    email, 
    number, 
    location, 
    password, 
    cart: [], 
    orders: [], 
    isAdmin: username === 'admin' 
  };
  users.push(user);
  
  const token = jwt.sign(
    { username: user.username, isAdmin: user.isAdmin },
    'secret123',
    { expiresIn: '7d' }
  );
  
  res.json({
    success: true,
    message: 'User registered successfully',
    token,
    user: { username, email, number, location, isAdmin: user.isAdmin }
  });
});

// ===== LOGIN =====
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
  
  const token = jwt.sign(
    { username: user.username, isAdmin: user.isAdmin },
    'secret123',
    { expiresIn: '7d' }
  );
  
  res.json({
    success: true,
    message: 'Login successful',
    token,
    user: { 
      username: user.username, 
      email: user.email, 
      number: user.number, 
      location: user.location, 
      isAdmin: user.isAdmin 
    }
  });
});

// ===== GET CART =====
app.get('/api/cart/:username', (req, res) => {
  const user = users.find(u => u.username === req.params.username);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  res.json({ success: true, cart: user.cart || [] });
});

// ===== UPDATE CART =====
app.post('/api/cart', (req, res) => {
  const { username, cart } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  user.cart = cart || [];
  res.json({ success: true, cart: user.cart });
});

// ===== PLACE ORDER =====
app.post('/api/order', (req, res) => {
  const { username, order } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  
  user.orders.push({
    ...order,
    date: new Date().toISOString()
  });
  user.cart = [];
  res.json({ success: true, message: 'Order placed successfully' });
});

// ===== GET PROFILE =====
app.get('/api/profile/:username', (req, res) => {
  const user = users.find(u => u.username === req.params.username);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  
  res.json({
    success: true,
    user: {
      username: user.username,
      email: user.email,
      number: user.number,
      location: user.location,
      cart: user.cart || [],
      orders: user.orders || [],
      isAdmin: user.isAdmin || false
    }
  });
});

// ===== GET MENU =====
app.get('/api/menu', (req, res) => {
  const menu = [
    {name:"Fried Chicken",price:850,desc:"Crispy Golden Chicken",img:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58"},
    {name:"BBQ Chicken",price:950,desc:"Smoky BBQ Flavor",img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
    {name:"Grilled Chicken",price:900,desc:"Healthy & Juicy",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"},
    {name:"Chicken Burger",price:650,desc:"Juicy chicken burger",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"}
  ];
  res.json({ success: true, menu });
});

app.get('/', (req, res) => {
  res.json({ message: 'Khan\'s Chicken API is running!' });
});

// ===== CREATE DEFAULT ADMIN =====
function createDefaultAdmin() {
  const adminExists = users.find(u => u.username === 'admin');
  if (!adminExists) {
    users.push({
      username: 'admin',
      email: 'admin@khanchicken.com',
      number: '0300-0000000',
      location: 'Karachi, Pakistan',
      password: 'hacker123',
      cart: [],
      orders: [],
      isAdmin: true
    });
    console.log('✅ Default admin created!');
  }
}

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('📝 Using in-memory database (no MongoDB required)');
  createDefaultAdmin();
  console.log('👤 Admin credentials: admin / admin123');
  console.log('✅ Ready to use!');
});

// ===== CHANGE PASSWORD =====
app.post('/api/change-password', (req, res) => {
  const { username, currentPassword, newPassword } = req.body;

  // Validate inputs
  if (!username || !currentPassword || !newPassword) {
    return res.status(400).json({ 
      success: false, 
      message: 'Username, current password, and new password are required' 
    });
  }

  // Find the user
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  // Verify current password
  if (user.password !== currentPassword) {
    return res.status(401).json({ success: false, message: 'Current password is incorrect' });
  }

  // Update password
  user.password = newPassword;
  res.json({ success: true, message: 'Password updated successfully' });
});