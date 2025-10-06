# 🏗️ MERN Auction Website

This project is a full-stack web application that combines a **React (Vite)** frontend with a **Node.js + Express + MongoDB** backend.  
It’s designed for a production-style environment, featuring **authentication, admin tools, listings management, and user interactions** — all built with clean, modular architecture.

---

## 🌟 Key Features

### 🧑‍💼 Authentication & User Management
- Secure login and registration using **JWT-based authentication**
- Password hashing and validation
- Token-based session handling
- Role-based access control (Admin vs. regular users)
- Protected routes with middleware-based validation
- Auto-logout and token expiry support

### 🛒 Listings / Items Management
- CRUD operations for “listings” (create, read, update, delete)
- Listings stored in MongoDB via Mongoose models
- Admins can edit or delete any listing
- Regular users can view listings
- Real-time updates for listing changes in the admin panel

### 👨‍🔧 Admin Dashboard
- Admins can:
  - View all registered users
  - Manage listings
  - Update or remove user data
- Access controlled via dedicated `admin-middleware`

### 📬 Email Notifications
- Integrated email sender (`utils/sendEmail.js`)
- Used for account verification or system notifications
- Supports custom SMTP credentials via `.env`

### 🧰 Validation & Error Handling
- Centralized validation using middleware and custom validators
- Clear, structured error responses (handled globally)
- Built-in middleware for authentication, validation, and error handling

### 🧩 Modular Architecture
- **Controllers** handle business logic
- **Routers** define API routes
- **Models** define database schemas
- **Middlewares** encapsulate logic for validation and access control

### 🖥️ Responsive Frontend
- Built with **React + Vite** for speed and DX
- **Reusable Components**: Navbar, Footer, Layouts
- **Page-based Routing** with React Router
- **Auth-aware UI** — hides/shows content depending on login state
- Smooth navigation and lightweight design optimized for modern browsers

### 📱 Pages Overview
| Page | Description |
|------|--------------|
| **Home** | Landing page introducing the app and features |
| **Login / Register** | Auth pages for user access |
| **Listing** | Displays available listings |
| **Items** | Admin or user listing management |
| **Admin Panel** | Restricted dashboard for managing users/listings |
| **Error Page** | Shown for invalid routes or missing pages |
| **Logout** | Clears session and redirects to home |

---

## 🧱 Tech Stack

**Frontend**
- React (Vite)
- React Router
- CSS Modules / Scoped CSS
- State management via Context API

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT for Authentication
- Nodemailer for Emails
- Joi / Custom Validators

---

## 🧠 How It Works (High-Level Flow)

```text
User -> React App (client) -> Express API (server) -> MongoDB
````

1. **Frontend** sends requests to `/api/...` endpoints
2. **Backend** validates and processes requests via controllers
3. **Middlewares** check authentication and roles
4. **MongoDB** handles data persistence for users, tokens, and listings
5. **Email service** triggers for specific events (e.g., password reset or notification)

---

## ⚡ Developer Highlights

* Clean separation between client and server
* Reusable middleware and route structure
* Easy to expand with new entities (e.g., services, posts, products)
* Configurable environment — works locally or on cloud platforms
* Production-ready React + Express structure

---

## ⚙️ Quick Setup (short version)

```bash
cd server && npm i && npm run dev
cd client && npm i && npm run dev
```

Add `.env` in `/server` with:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
EMAIL_USER=you@example.com
EMAIL_PASS=yourpassword
CLIENT_URL=http://localhost:5173
```

---

## 🧾 Folder Highlights

| Folder                   | Purpose                                       |
| ------------------------ | --------------------------------------------- |
| `server/controllers/`    | Core logic for auth, listings, admin          |
| `server/models/`         | Database models for users, listings, tokens   |
| `server/middlewares/`    | Authentication, validation, error handling    |
| `server/utils/`          | Helper utilities (e.g., DB connection, email) |
| `client/src/components/` | Shared UI parts (Navbar, Footer, Layouts)     |
| `client/src/pages/`      | Application screens                           |
| `client/src/store/`      | Authentication context & state logic          |

---

## 🧩 Possible Future Enhancements

* Add image uploads to listings
* Two-factor authentication (2FA)
* User activity tracking and analytics
* Role management (e.g., moderators)
* Deployment CI/CD setup (Render, Vercel, or Netlify)

---

## 👨‍💻 Author

**Mehedi Hasan Shahed**

* **Email:** [mehedihasanshahed3@gmail.com](mailto:mehedihasanshahed3@gmail.com)

* **LinkedIn:** [Mehedi Hasan Shahed](https://www.linkedin.com/in/mehedi-hasan-153404287/)

💼 Software Developer | Web Engineer | PHP & JavaScript Enthusiast

---

## 🤝 Developer Notes

* Keep `auth-middleware` updated when changing token logic
* Admin access tied to user role field in `user-model.js`
* Always update both client and server `.env` before deployment
* When in doubt, check the route controllers first — they define most logic cleanly

---

## 🪪 License

Internal project — use freely within your organization.
For open-source use, add a proper LICENSE file.
