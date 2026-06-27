const jwt = require('jsonwebtoken');
const { readDb, publicUser } = require('../lib/store');

async function authenticate(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;

    if (!token) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET || 'change-this-in-production');
    const db = await readDb();
    const user = db.users.find((entry) => entry.id === payload.id);

    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    req.user = user;
    req.publicUser = publicUser(user);
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
}

function requireAdmin(req, res, next) {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ success: false, message: 'Admin access required' });
  }
  next();
}

module.exports = {
  authenticate,
  requireAdmin
};
