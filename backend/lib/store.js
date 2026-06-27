const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const dataDir = path.join(__dirname, '..', 'data');
const dbPath = path.join(dataDir, 'db.json');

const defaultMenu = [
  {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    price: 850,
    desc: 'Crispy golden chicken with signature seasoning.',
    img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken',
    price: 950,
    desc: 'Smoky BBQ glazed chicken grilled to perfection.',
    img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'grilled-chicken',
    name: 'Grilled Chicken',
    price: 900,
    desc: 'Juicy grilled chicken with herbs and spices.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    price: 650,
    desc: 'Loaded chicken burger with fresh lettuce and sauce.',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'crispy-strips',
    name: 'Crispy Chicken Strips',
    price: 500,
    desc: 'Boneless chicken strips with an extra crunchy coating.',
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'fresh-lime-soda',
    name: 'Fresh Lime Soda',
    price: 180,
    desc: 'Chilled sparkling lime soda with a refreshing finish.',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80'
  }
];

function createId(prefix = 'id') {
  if (crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function ensureDb() {
  await fs.promises.mkdir(dataDir, { recursive: true });

  if (!fs.existsSync(dbPath)) {
    const adminPasswordHash = await bcrypt.hash('admin123', 10);
    const now = new Date().toISOString();
    const initialDb = {
      meta: {
        appName: "Khan's Chicken",
        version: '2.0.0',
        createdAt: now,
        updatedAt: now
      },
      users: [
        {
          id: createId('user'),
          username: 'admin',
          email: 'admin@khanschicken.local',
          number: '0300-0000000',
          location: 'Karachi, Pakistan',
          passwordHash: adminPasswordHash,
          isAdmin: true,
          cart: [],
          orders: [],
          createdAt: now,
          updatedAt: now
        }
      ],
      menu: defaultMenu,
      orders: []
    };
    await fs.promises.writeFile(dbPath, JSON.stringify(initialDb, null, 2));
    return initialDb;
  }

  const current = await readDb();
  let changed = false;

  if (!Array.isArray(current.menu) || current.menu.length === 0) {
    current.menu = defaultMenu;
    changed = true;
  }

  const admin = Array.isArray(current.users)
    ? current.users.find((user) => user.username === 'admin')
    : null;

  if (!admin) {
    const adminPasswordHash = await bcrypt.hash('admin123', 10);
    current.users = Array.isArray(current.users) ? current.users : [];
    current.users.push({
      id: createId('user'),
      username: 'admin',
      email: 'admin@khanschicken.local',
      number: '0300-0000000',
      location: 'Karachi, Pakistan',
      passwordHash: adminPasswordHash,
      isAdmin: true,
      cart: [],
      orders: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    changed = true;
  }

  if (!Array.isArray(current.orders)) {
    current.orders = [];
    changed = true;
  }

  if (changed) {
    await writeDb(current);
  }

  return current;
}

async function readDb() {
  const raw = await fs.promises.readFile(dbPath, 'utf8');
  return JSON.parse(raw);
}

async function writeDb(data) {
  data.meta = data.meta || {};
  data.meta.updatedAt = new Date().toISOString();
  await fs.promises.writeFile(dbPath, JSON.stringify(data, null, 2));
  return data;
}

function publicUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    number: user.number,
    location: user.location,
    isAdmin: !!user.isAdmin,
    cart: Array.isArray(user.cart) ? user.cart : [],
    orders: Array.isArray(user.orders) ? user.orders : [],
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}

module.exports = {
  dbPath,
  defaultMenu,
  createId,
  ensureDb,
  readDb,
  writeDb,
  publicUser
};
