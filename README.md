# 🏗️ MERN Listing Management System

A full-stack **MERN application** for managing listings or contacts.  
This project includes **user authentication**, **admin management**, and **user-specific listing control** — allowing users to create, view, and delete their own listings, while admins can manage all listings and users.

---

## 🚀 Features

### 👤 User Features
- Register and login using JWT authentication  
- Create and view personal listings  
- Delete only listings created by the logged-in user  

### 🧑‍💼 Admin Features
- View all users and their listings  
- Delete any user or listing  
- Manage platform data securely with admin privileges  

### ⚙️ General Features
- Secure API routes protected by JWT middleware  
- Toast notifications for success/error actions  
- Responsive UI built with React  
- RESTful backend using Express and MongoDB  

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, React Router, React Toastify |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT (JSON Web Tokens) |
| Styling | CSS / Bootstrap |
| State Management | React Context (`useAuth` custom hook) |

---

## 📁 Folder Structure

```

MERN-Listing-App/
│
├── backend/
│   ├── controllers/
│   │   └── admin-controller.js
│   ├── middleware/
│   │   └── auth-middleware.js
│   ├── models/
│   │   ├── user-model.js
│   │   └── listing-model.js
│   ├── routes/
│   │   └── admin-routes.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── AdminListing.jsx
│   │   │   ├── UserListing.jsx
│   │   │   └── Login.jsx
│   │   ├── store/
│   │   │   └── auth.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── README.md

```

---

## ⚙️ Setup Instructions

### 🧩 Prerequisites
- Node.js and npm installed
- MongoDB running locally or via Atlas
- `.env` file with:
```

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

````

---

### 🔧 Backend Setup
1. Navigate to the backend folder:
 ```bash
 cd backend
````

2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   npm start
   ```
4. Server will run on `http://localhost:5000`

---

### 💻 Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the React app:

   ```bash
   npm run dev
   ```
4. App will run on `http://localhost:5173` (or similar)

---

## 🔐 Authentication

All protected routes require a JWT token, sent via the `Authorization` header:

```
Authorization: Bearer <your_token>
```

The token is automatically handled by the `useAuth` hook in the React frontend.

---

## 🧑‍💻 Key API Endpoints

### **Admin Routes**

| Method | Endpoint                        | Description            |
| ------ | ------------------------------- | ---------------------- |
| GET    | `/api/admin/listing`            | Fetch all listings     |
| DELETE | `/api/admin/listing/delete/:id` | Delete a listing by ID |
| GET    | `/api/admin/users`              | Fetch all users        |
| DELETE | `/api/admin/users/delete/:id`   | Delete a user by ID    |

### **User Routes**

| Method | Endpoint                        | Description               |
| ------ | ------------------------------- | ------------------------- |
| GET    | `/api/user/listings`            | Fetch user’s own listings |
| DELETE | `/api/user/listings/delete/:id` | Delete user’s own listing |
| POST   | `/api/user/listings`            | Create a new listing      |

---

## 🧠 How It Works

* Each user gets a **JWT** upon login.
* The token is verified via a middleware that attaches `req.user` to each request.
* Listings are stored in MongoDB with a reference to the `userId`.
* Admin routes allow full access, while user routes are restricted to their own data.
* The frontend uses `fetch` with the `Authorization` header to access protected endpoints.

---

## 🧪 Future Improvements

* Add pagination and search for listings
* Support image uploads for listings
* Add roles (Admin, Seller, Buyer)
* Improve UI/UX with Material UI or Tailwind CSS

---

## 🏁 Running Both Frontend & Backend Together

If using concurrently:

```bash
npm run dev
```

Add this script in the root `package.json`:

```json
"scripts": {
  "dev": "concurrently \"npm run server\" \"npm run client\""
}
```

---

## 👨‍💻 Author

**Developed by:** Mehedi Hasan Shahed
**Tech Stack:** MERN (MongoDB, Express, React, Node.js)
**License:** MIT
