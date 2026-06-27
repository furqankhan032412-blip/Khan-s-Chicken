# 🍗 Khan's Chicken Restaurant
### Full-Stack Web Application

![Khan's Chicken Banner](screenshots/banner.png)

## 📋 Overview
**Khan's Chicken** is a complete restaurant ordering platform that allows users to browse menu items, add them to a cart, place orders, and manage their profiles. The application features a robust admin panel for menu management, JWT-based authentication, and a modern dark/light theme toggle.

## ✨ Features

### 👤 User Features
- **Authentication** – Register, Login, Logout with JWT
- **Dynamic Menu** – Browse items with images, prices, descriptions
- **Shopping Cart** – Add/remove items, view total, checkout
- **Profile Management** – View profile, change password
- **Dark/Light Mode** – One-click theme toggle

### 🔐 Admin Features
- **Admin Panel** – Dedicated admin dashboard
- **Menu Management** – Add new items (name, price, desc, image URL)
- **Delete Items** – Remove items with confirmation
- **Real-time Sync** – Changes appear instantly

## 🛠️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

### Database
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
*(In-memory for development, MongoDB ready for production)*

khan-chicken/
├── backend/
│   ├── routes/
│   │   └── api.js
│   ├── models/
│   │   └── User.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   └── index.html
├── screenshots/
│   ├── homepage.png
│   ├── menu.png
│   ├── cart.png
│   ├── admin.png
│   └── profile.png
└── README.md



## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18.x or higher)
- npm (v9.x or higher)

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/khan-chicken.git
cd khan-chicken
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install


Step 3: Configure Environment

Create a .env file in the backend folder:

```env
PORT=5000
JWT_SECRET=your_super_secret_key_here_12345


Step 4: Start the Backend Server

```bash
npm run dev


Step 5: Open Frontend

Double-click frontend/index.html in your browser.

Default Admin Credentials

🔌 API Endpoints

Method Endpoint Description Auth
POST /api/register Register new user ❌
POST /api/login User login ❌
POST /api/cart Update user cart ✅
POST /api/order Place an order ✅
POST /api/change-password Change password ✅
GET /api/profile/:username Get user profile ✅
GET /api/menu Get menu items ❌

📸 Screenshots

Homepage

c:\Users\DEll\Desktop\home.jpeg

Menu

c:\Users\DEll\Desktop\Menu.jpeg

Cart

c:\Users\DEll\Desktop\Cart.jpeg

Admin Panel

c:\Users\DEll\Desktop\Panel.jpeg

Profile

c:\Users\DEll\Desktop\Profile.jpeg

[Presentation - Khan's Chicken.pptx](https://github.com/user-attachments/files/29412698/Presentation.-.Khan.s.Chicken.pptx)

[Khan's_ChickenProject_Report.docx](https://github.com/user-attachments/files/29412700/Khan.s_ChickenProject_Report.docx)


🚀 Future Enhancements

· 🔲 MongoDB integration for persistent data
· 🔲 Password hashing with bcrypt
· 🔲 Payment gateway (Stripe/PayPal)
· 🔲 Order history
· 🔲 Email notifications
· 🔲 Mobile app

🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author

Muhammad Furqan

· GitHub: https://github.com/furqankhan032412
· LinkedIn: www.linkedin.com/in/furqan-khan-9431253b0

⭐ Star this repository if you found it helpful!
