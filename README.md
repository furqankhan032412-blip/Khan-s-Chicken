# 🍗 Khan's Chicken Restaurant
### Full-Stack Web Application

![Khan's Chicken Banner](https://github.com/user-attachments/assets/f43653b2-a557-4c91-b184-2bcffd392de1)

---

## 📋 Overview

**Khan's Chicken** is a complete restaurant ordering platform that allows users to browse menu items, add them to a cart, place orders, and manage their profiles. The application features a robust admin panel for menu management, JWT-based authentication, and a modern dark/light theme toggle.

Built with a **Node.js + Express** backend and a responsive **HTML/CSS/JavaScript** frontend, this project demonstrates full-stack development best practices with a focus on user experience and clean architecture.

---

## ✨ Features

### 👤 User Features
| Feature | Description |
|---------|-------------|
| **Authentication** | Register, Login, Logout with JWT token-based authentication |
| **Dynamic Menu** | Browse items with images, prices, and descriptions |
| **Shopping Cart** | Add/remove items, view real-time total, checkout |
| **Profile Management** | View profile details, change password securely |
| **Dark/Light Mode** | One-click theme toggle with persistent preference |

### 🔐 Admin Features
| Feature | Description |
|---------|-------------|
| **Admin Panel** | Dedicated dashboard with full menu control |
| **Menu Management** | Add new items (name, price, description, image URL) |
| **Delete Items** | Remove items with confirmation dialog |
| **Real-time Sync** | Changes appear instantly on the frontend |

---

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

---

## 📁 Project Structure

```

khan-chicken/
├── backend/
│   ├── routes/
│   │   └── api.js          # API endpoints
│   ├── models/
│   │   └── User.js         # User schema (MongoDB ready)
│   ├── server.js           # Main server file
│   ├── package.json        # Dependencies
│   └── .env                # Environment variables
├── frontend/
│   └── index.html          # Complete frontend application
├── screenshots/
│   ├── homepage.png
│   ├── menu.png
│   ├── cart.png
│   ├── admin.png
│   └── profile.png
├── Presentation - Khan's Chicken.pptx
├── Khan's_ChickenProject_Report.docx
└── README.md

```

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher)
- Modern web browser (Chrome, Firefox, Edge)

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/furqankhan032412/khan-chicken.git
cd khan-chicken
```

---

Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

---

Step 3: Configure Environment

Create a .env file in the backend folder:

```env
PORT=5000
JWT_SECRET=your_super_secret_key_here_12345
```

---

Step 4: Start the Backend Server

```bash
npm run dev
```

Expected Output:

```
🚀 Server running on http://localhost:5000
✅ Using in-memory database
✅ Default admin created!
👤 Admin credentials: admin / admin123
✅ Ready to use!
```

---

Step 5: Open Frontend

Double-click frontend/index.html in your browser or use a Live Server extension.

---

Default Admin Credentials

---

🔌 API Endpoints

Method Endpoint Description Authentication
POST /api/register Register a new user ❌
POST /api/login User login ❌
POST /api/cart Update user cart ✅
POST /api/order Place an order ✅
POST /api/change-password Change user password ✅
GET /api/profile/:username Get user profile ✅
GET /api/menu Get menu items ❌

---

📸 Screenshots

Homepage

<img width="1600" height="719" alt="home" src="https://github.com/user-attachments/assets/0ff598f6-6ea0-4997-a360-9e726842dd07" />


Menu

<img width="1600" height="778" alt="Menu" src="https://github.com/user-attachments/assets/7236097d-dbe3-4822-94ea-c73d980ca32d" />


Cart

<img width="1600" height="785" alt="Cart" src="https://github.com/user-attachments/assets/5740381e-17cd-42c9-bed7-6fb652be5bad" />


Admin Panel

<img width="1600" height="771" alt="Panel" src="https://github.com/user-attachments/assets/85098bf9-6eec-46f6-8ec9-0321399d4915" />


Profile

<img width="1600" height="798" alt="Profile" src="https://github.com/user-attachments/assets/ddb3b7c7-0774-456b-8787-5a47ae2e7137" />


---

📄 Documentation

· Project Report : [Khan's_ChickenProject_Report.docx](https://github.com/user-attachments/files/29412950/Khan.s_ChickenProject_Report.docx)

· Presentation : [Presentation - Khan's Chicken.pptx](https://github.com/user-attachments/files/29412952/Presentation.-.Khan.s.Chicken.pptx)


---

🚀 Future Enhancements

Priority Feature Status
High MongoDB integration for persistent data 🔲 Planned
High Password hashing with bcrypt 🔲 Planned
Medium Payment gateway (Stripe/PayPal) 🔲 Planned
Medium Order history and tracking 🔲 Planned
Low Email notifications for orders 🔲 Planned
Low Mobile app with React Native 🔲 Planned

---

🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

---

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

👤 Author

Muhammad Furqan

· GitHub: @furqankhan032412
· LinkedIn: Furqan Khan

---

🙏 Acknowledgments

· Tailwind CSS – Utility-first CSS framework
· Bootstrap – Component library
· Unsplash – Free images
· Google Fonts – Typography
· Shields.io – Tech stack badges

---

📊 Project Status

Metric Value
Version 1.0.0
Status ✅ Complete
Last Updated June 2026
License MIT

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful! ⭐</strong>
  <br>
  <sub>Made with ❤️ by Muhammad Furqan</sub>
</div>
```
