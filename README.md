# 📝 To-Do List App (MERN/Node.js Intern Assignment)

A simple, clean, and mobile-responsive **To-Do List application** built using **Node.js (Express)** for the backend and **React (Vite)** for the frontend.  
This project demonstrates your ability to build and integrate a complete API with a modern frontend UI.

---

## ✅ Features

### 🔧 Backend (Node.js + Express)
- `GET /` → Fetch all tasks
- `POST /` → Add a new task (title required)
- `PUT /:id` → Toggle task completion status
- `DELETE /:id` → Delete a task by ID
- Uses **in-memory data store** (array) for simplicity
- Basic validation & error handling

### 🎨 Frontend (React + Vite)
- View all tasks with dynamic UI
- Add a new task via input form
- Mark a task as complete/incomplete (checkbox toggle)
- Delete a task with visual feedback
- Completed tasks have **strike-through**
- Responsive layout with **Tailwind CSS**
- Interactive animations with **Framer Motion**
- Notifications via **notistack**

---
## 🧑‍💻 How to Run the App

### 1. Clone the Repository

```
git clone https://github.com/Ayush-3012/To-Do_List
cd To-Do_List
```
###  2. Start Backend (Express API)
```
cd backend
npm install
npm run dev
```
🟢 Server will run on http://localhost:5000
### 3. Start Frontend (React + Vite)
```
cd frontend
npm install
npm run dev
```
🟢 App will run on http://localhost:5173
## ⚙️ Environment Variable
Create a .env file in /frontend:
``` 
VITE_API_URL = http://localhost:5000/api/v1/todos
```

## 📷 Screenshots
![image](https://github.com/user-attachments/assets/f142d53d-df6b-4b85-8c7c-606a42024152)

## 🛠 Tech Stack
* Backend: Node.js, Express
* Frontend: React (Vite)
* Styling: Tailwind CSS
* Animations: Framer Motion
* Notifications: Notistack
* Others: UUID, Axios


## 🙋‍♂️ Author
Made with ❤️ by Ayush Kumar

📧 Email: diveshsrivastava31@gmail.com

🔗 [Portfolio](https://portfolio-ayush3012.vercel.app/) or [LinkedIn](https://www.linkedin.com/in/ayush-kumar-6137651b4/)

