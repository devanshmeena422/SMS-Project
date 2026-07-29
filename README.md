# 📌 Subscription Management System

A full-stack **Subscription Management System** developed using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**. This project helps users manage subscription plans, billing, invoices, and profiles while providing administrators with complete control over users, subscriptions, plans, payments, and reports.

---

# 🚀 Features

## 👤 User Module
- User Registration
- User Login
- Dashboard
- Profile Management
- Subscription Plans
- Billing Management
- Invoice Management
- Reports
- Account Settings
- Contact Page
- About Page

---

## 👨‍💼 Admin Module
- Admin Dashboard
- Manage Users
- Manage Plans
- Manage Subscriptions
- Manage Payments
- Reports Management

---

## 💳 Billing & Subscription
- View Subscription Plans
- Billing History
- Payment Status
- Invoice Generation
- Download Invoice (Demo)
- Subscription Renewal Details

---

# 🛠️ Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript (ES6)

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Development Tools
- Visual Studio Code
- MongoDB Compass
- Git & GitHub

---

# 🏗️ Project Architecture

The project follows the **MVC (Model-View-Controller)** Architecture.

```
Client
   │
   ▼
Frontend (HTML, CSS, JavaScript)
   │
   ▼
Express.js Server
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Models
   │
   ▼
MongoDB Database
```

---

# 📂 Project Structure

```
Subscription Management System
│
├── BACKEND
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── FRONTEND
│   ├── css
│   ├── js
│   ├── assets
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── plans.html
│   ├── billing.html
│   ├── invoice.html
│   ├── reports.html
│   ├── profile.html
│   ├── settings.html
│   ├── admin.html
│   ├── manage-users.html
│   ├── manage-plans.html
│   ├── manage-subscriptions.html
│   ├── manage-payments.html
│   ├── contact.html
│   └── about.html
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/subscription-management-system.git
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Configure Environment Variables

Create a **.env** file inside the backend folder.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/subscription_management_system
```

---

## Start Backend Server

```bash
npm start
```

or

```bash
node server.js
```

---

## Open Frontend

Open **index.html** in your browser.

---

# 📡 REST API Endpoints

## User

- GET /users
- POST /users/register
- POST /users/login

## Plans

- GET /plans
- POST /plans

## Subscriptions

- GET /subscriptions
- POST /subscriptions

## Payments

- GET /payments
- POST /payments

## Invoices

- GET /invoices

---

# 📊 Modules

### User
- Register
- Login
- Dashboard
- Profile
- Settings

### Subscription
- Plans
- Billing
- Invoices

### Admin
- Users
- Plans
- Payments
- Reports

---

# 💾 Database Collections

- Users
- Plans
- Subscriptions
- Payments
- Invoices

---

# 🎯 Project Objectives

- Simplify subscription management.
- Track billing and invoices.
- Manage customer subscriptions.
- Provide an admin control panel.
- Maintain secure and organized data.

---

# 🔮 Future Enhancements

- JWT Authentication
- Email Notifications
- Razorpay / Stripe Payment Gateway
- PDF Invoice Generation
- Admin Analytics Dashboard
- Role-Based Authentication
- Password Encryption
- Email Verification
- Forgot Password
- Dark Mode

---

# 📸 Project Screens

- Home Page
- Login
- Dashboard
- Plans
- Billing
- Reports
- Profile
- Settings
- Admin Dashboard

---

# 👨‍💻 Developer

**Devansh Meena**

B.Tech Computer Science Engineering

SAGE University, Indore

---

# 📜 License

This project is developed for **educational and learning purposes**.

---

# ⭐ Acknowledgements

Special thanks to:

- SAGE University
- Node.js Community
- Express.js Documentation
- MongoDB Documentation
- Open Source Community

---

## 🌟 Thank You

Thank you for visiting this project.

If you found this project useful, consider giving it a ⭐ on GitHub.