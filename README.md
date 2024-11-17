# User Registration App

A **full-stack application** for user registration and management. This project demonstrates a seamless integration of a **React.js** frontend with a **Node.js** backend powered by **MongoDB**. 

---

## ✨ Features

- View all registered users in a **responsive table**.
- Add a new user with **Name**, **Email**, and **Date of Birth**.
- Update existing user details via a pre-filled form.
- Delete users from the system with a single click.
- Fully responsive and modern UI designed with **Tailwind CSS**.

---

## 🛠️ Tech Stack

### Frontend:
- ⚛️ **React.js**
- 🎨 **Tailwind CSS**
- 🔗 **Axios** (for API calls)

### Backend:
- 🟢 **Node.js**
- 🌐 **Express.js**
- 🛢 **MongoDB** (database)
- 🗂 **Mongoose** (ODM)

---

## 🚀 Quick Start Guide

### Prerequisites:
- **Node.js** installed on your system.
- A **MongoDB connection string** (local or cloud-based like MongoDB Atlas).

---

### 🔧 Setup Instructions

#### **1. Clone the Repository**

```bash
git clone https://github.com/KAMRANKHANALWI/user-registration-app.git
cd user-registration
```

#### **2. Backend Setup**

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` directory:
  ```
  MONGO_URI=<your-mongodb-connection-string>
  PORT=5000
  ```

- Start the backend server:
  ```bash
  npm start
  ```

#### **3. Frontend Setup**

```bash
cd ../frontend
npm install
```

- Start the React development server:
  ```bash
  npm start
  ```

---

## 🌐 URLs

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000/api/users](http://localhost:5000/api/users)

---

## 📋 API Documentation

### **Base URL**: `http://localhost:5000/api/users`

| Method | Endpoint   | Description               |
|--------|------------|---------------------------|
| GET    | `/`        | Retrieve all users        |
| POST   | `/`        | Add a new user            |
| PUT    | `/:id`     | Update user by ID         |
| DELETE | `/:id`     | Delete user by ID         |

---

## 📸 Screenshots

### **User Management Table**
A responsive table showing all users with options to edit or delete:

<img width="1350" alt="image" src="https://github.com/user-attachments/assets/5880595c-8aea-4282-8f50-8986ebb854aa">

### **Add User Modal**
A sleek modal for adding a new user:

<img width="1322" alt="image" src="https://github.com/user-attachments/assets/8fd9c378-5dd1-4d28-96ba-cd1c28585c36">



---

## 📝 Contributing

We welcome contributions! Follow these steps:

1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

### ⭐️ Show Some Love

If you find this project helpful, please give it a **star** ⭐ on GitHub!
