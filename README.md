# 🎯 Leaderboard Task

A fun and interactive full-stack web app that allows users to join, compete, and rank on a real-time leaderboard by claiming random points. Built with simplicity and clarity in mind using **React**, **Node.js**, and **MongoDB**.

---

## 🔧 Tech Stack

- **Frontend**: React.js (with basic inline styling)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (with Mongoose)
- **API Tool**: Axios for HTTP calls

---

## 💡 What This Project Does

- Users can **join the competition** by entering their name.
- A selected user can **claim random points** (between 1 to 10).
- Points are **stored in MongoDB**, and the leaderboard is **updated live**.
- The app automatically **sorts users by total points** in real time.

---

## 📸 Screenshots

### ➕ Add User & Claim Points
![Add User](screenshots/add-user.png)

### 🏆 Dynamic Leaderboard
![Leaderboard](screenshots/leaderboard.png)

---

## 🚀 How to Run the Project

### 🔹 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside the backend folder with this content:

```
PORT=5000
MONGO_URI=your_mongo_connection_string_here
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Visit: `http://localhost:3000` to use the app

---

## 📁 Folder Structure

```
leaderboard-task/
├── backend/       # Express.js API and MongoDB models
└── frontend/      # React.js app
```

---

## ✅ Features

- Add user to the leaderboard
- Claim random points (1–10)
- Leaderboard auto-sorts top scorers
- Points saved permanently in MongoDB
- Clean and minimal UI

---

## 👤 Author

Rajeshwari Chaubey  
B.E. in Artificial Intelligence and Machine Learning  
Sir M. Visvesvaraya Institute of Technology

---
