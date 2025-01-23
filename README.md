To-Do App (MERN Stack)
This is a simple and elegant To-Do application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

🚀 Features
✅ Add, edit, and delete tasks effortlessly.
📌 Mark tasks as complete or incomplete.
💾 Persistent data storage with MongoDB.
📋 Prerequisites
Ensure you have the following installed:

Node.js (v14 or later)
MongoDB
npm
⚙️ Installation
Follow these steps to set up the project:

Backend Setup
Clone the repository:

git clone https://github.com/yourusername/mern-todo-app.git
cd mern-todo-app
Navigate to the backend directory:

cd backend
Install dependencies:

npm install
Create a .env file in the backend directory and add the following:

PORT=5000
MONGO_URI=mongodb://localhost:27017/todoapp
Start the backend server:

npm start
Frontend Setup
Open a new terminal and navigate to the frontend directory:

cd frontend
Install dependencies:

npm install
Start the frontend development server:

npm start
📁 Folder Structure
mern-todo-app/
├── backend/       # Node.js & Express backend
│   ├── models/    # Mongoose models
│   ├── routes/    # API routes
│   └── server.js  # Entry point for the backend
├── frontend/      # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   └── App.js      # Main React component
├── README.md      # Project documentation
🌐 API Endpoints
Base URL: http://localhost:5000
Tasks
GET /api/tasks: Retrieve all tasks.
POST /api/tasks: Create a new task.
PUT /api/tasks/:id: Update a task by ID.
DELETE /api/tasks/:id: Delete a task by ID.
🛠️ Scripts
Backend
node server.js: Start the backend server.
Frontend
npm start: Start the React development server.
npm run build: Build the frontend for production.
🤝 Contributing
We welcome contributions! Feel free to:

Submit issues
Create pull requests
Make sure to follow the project's coding standards.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
