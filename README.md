🚀 MERNSTACK LanguagePro Quiz Application

A full-stack Quiz Application built using the MONSTACK (MongoDB, Express.js, React, Node.js) along with Tailwind CSS.
This project demonstrates real-world full-stack development, including authentication, protected routes, result tracking, and a responsive UI.

📌 Project Overview

The LanguagePro Quiz App allows users to register, log in, attempt quizzes across multiple technologies and difficulty levels, and track their performance over time.
Each user can securely access only their own quiz data, ensuring proper authentication and data privacy.

The application follows a modular, scalable architecture suitable for production-level projects.

✨ Key Features
🔐 User Authentication

Secure Signup & Login functionality

Password hashing using bcrypt

Email validation using validator

JWT-based authentication (24-hour token validity)

Protected routes using authentication middleware

🧠 Quiz Functionality

3 Difficulty Levels

Basic – 20 questions

Intermediate – 40 questions

Advanced – 60 questions

10 Technology Categories

HTML, CSS, JavaScript, React, Node.js

Java, Python, C++, Bootstrap, Database

Questions are filtered by technology + difficulty

Instant result calculation after quiz completion

📊 Result Tracking & Performance Analysis

Stores results in MongoDB with user reference

Result details include:

Total questions

Correct & wrong answers

Score percentage

Performance label

Performance Categories:

Excellent (≥ 85%)

Good (≥ 65%)

Average (≥ 45%)

Needs Work (< 45%)

Users can filter results by technology

📱 Responsive UI

Fully responsive design for mobile & desktop

Animated Login & Signup forms

Sidebar for quiz selection (tech + level)

Toast notifications for user feedback

Clean UI using Tailwind CSS

🛠️ Tech Stack
Frontend

React

React Router DOM

Axios

React Hooks

React Toastify

Tailwind CSS

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT (JSON Web Token)

bcrypt

validator

🗂️ Project Structure
Backend
backend/
│── models/
│── controllers/
│── routes/
│── middleware/
│── config/
│── server.js

Frontend
frontend/
│── components/
│── pages/
│── assets/
│── utils/
│── App.jsx 

▶️ How to Run the Project Locally
📌 Prerequisites

Node.js (v16 or higher)

MongoDB Atlas account (or local MongoDB)

npm or yarn

🔧 Backend Setup
cd backend
npm install


Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the backend server:

npm run dev


The backend will run on:

http://localhost:5000

🎨 Frontend Setup
cd frontend
npm install

Start the frontend development server:

npm run dev

The frontend will run on:

http://localhost:5173

🔗 Connect Frontend & Backend

Ensure backend is running before starting frontend

Axios is used for API communication

JWT token is sent via Authorization headers for protected routes

🔄 Application Flow

User registers and logs in

JWT token is generated and stored

User selects technology & difficulty

Quiz is attempted sequentially

Result is calculated and stored

User views filtered results in My Results page

📈 Performance Rules
Difficulty	Questions	Score Threshold	Label
Basic	20	≥ 85%	Excellent
Intermediate	40	≥ 65%	Good
Advanced	60	≥ 45%	Average
Any	—	< 45%	Needs Work
🔒 Security Highlights

Passwords are never stored in plain text

JWT verification middleware protects sensitive routes

Users can access only their own quiz results

Input validation & proper error handling implemented

🧪 Testing

Backend APIs tested using Thunder Client

Authentication and protected routes verified

Frontend–backend integration tested with Axios

💡 Key Learnings

Building scalable full-stack applications

Implementing secure authentication & authorization

Managing complex state using React Hooks

Designing responsive UI using Tailwind CSS

Structuring backend code for maintainability

🚀 Future Enhancements

Admin panel for managing questions

Timer-based quizzes

Leaderboard system

Detailed analytics & charts

Email verification & password reset

👨‍💻 Author

Amaresh Maurya
MERN Developer (Strong Frontend Focus)
Strong expertise in React.js, Tailwind CSS, and modern UI development
Hands-on experience with Node.js, Express.js, MongoDB
Passionate about building secure, scalable, and user-friendly web applications
