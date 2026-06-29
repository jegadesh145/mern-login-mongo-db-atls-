# MERN Auth Portal 🔐

A full-stack authentication system built with the **MERN stack** (MongoDB, Express, React, Node.js), featuring JWT authentication, bcrypt password hashing, and a protected dashboard.

## Features

- ✅ User Registration with password hashing (bcryptjs)
- ✅ User Login with JWT token generation
- ✅ Protected Dashboard route (auth middleware)
- ✅ React frontend with React Router
- ✅ MongoDB Atlas cloud database

---

## Project Structure

```
cluster-proj/
├── backend/          # Express + Node.js API
│   ├── config/       # Database connection
│   ├── controllers/  # Route logic
│   ├── middleware/   # JWT auth middleware
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API routes
│   ├── server.js
│   └── .env.example  # Copy this to .env and fill in your values
└── frontend/         # React + Vite app
    └── src/
        ├── pages/    # Login, Register, Dashboard, Home
        └── components/
```

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/jegadesh145/mern-login-mongo-db-atls-.git
cd mern-login-mongo-db-atls-
```

### 2. Set up the Backend
```bash
cd backend
npm install

# Copy .env.example and fill in your credentials
copy .env.example .env
```
Edit `.env` and add your **MongoDB Atlas** connection string and JWT secret.

### 3. Set up the Frontend
```bash
cd ../frontend
npm install
```

### 4. Run the App

**Backend** (Terminal 1):
```bash
cd backend
npm run dev
```
Runs on `http://localhost:5000`

**Frontend** (Terminal 2):
```bash
cd frontend
npm run dev
```
Runs on `http://localhost:5173`

---

## Environment Variables

Create a `.env` file inside the `backend/` folder (see `.env.example`):

| Variable       | Description                        |
|----------------|------------------------------------|
| `PORT`         | Server port (default: 5000)        |
| `MONGODB_URI`  | Your MongoDB Atlas connection string |
| `JWT_SECRET`   | Secret key for signing JWT tokens  |
| `NODE_ENV`     | `development` or `production`      |

---

## Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React, Vite, React Router   |
| Backend   | Node.js, Express.js         |
| Database  | MongoDB Atlas (Mongoose)    |
| Auth      | JWT, bcryptjs               |
