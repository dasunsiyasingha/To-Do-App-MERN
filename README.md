✨ MERN Stack To-Do App ✨

This project is a feature-rich To-Do application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to create, read, update, and delete tasks, providing an efficient and user-friendly interface.

🌟 Features

✅ Task Management: Create, update, and delete tasks with ease.

💻 Responsive Design: Fully responsive UI for a seamless experience on mobile and desktop.

🔄 Real-Time Updates: Tasks update in real-time without refreshing the page.

📄 Persistent Storage: Uses MongoDB to store tasks securely.

⚲ Search Functionality: Quickly find specific tasks.

🛠️ Tech Stack

🔹 Frontend:

React.js

Tailwind CSS / Bootstrap (for styling)

🔹 Backend:

Node.js

Express.js

🔹 Database:

MongoDB

🚀 Installation

Prerequisites

Ensure you have the following installed on your system:

Node.js

MongoDB

Git

Steps

🔧 Clone the repository:

git clone https://github.com/your-username/mern-todo-app.git

🏙 Navigate to the project directory:

cd mern-todo-app

⚙️ Install dependencies:
For the backend:

cd backend
npm install

For the frontend:

cd ../frontend
npm install

🔒 Set up environment variables:
Create a .env file in the backend directory with the following:

MONGO_URI=your-mongodb-connection-string
PORT=5000

🎮 Start the application:
Open two terminal windows:

For the backend:

cd backend
node server.js

For the frontend:

cd frontend
npm start

🔍 Access the application:
Open http://localhost:3000 in your browser.

🌐 Folder Structure

mern-todo-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   ├── App.js
│   └── index.js
└── README.md

License

This project is licensed under the MIT License.

