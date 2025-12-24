🚀 Secure Profile & Access Control System (MERN Stack)

A Full-Stack Implementation featuring JWT Authentication, AES-256 Encryption, Protected APIs, Tailwind UI & AI-Assisted Development

📌 1. Project Overview

The Secure Profile & Access Control System is a full-stack MERN application built to provide a safe, reliable, and user-friendly platform for managing personal identity information. It enables users to securely register, authenticate, and access their profile, while ensuring that all sensitive data remains protected throughout the system.

The application integrates multiple modern security and engineering best practices, including:

🔐 JWT-based authentication for secure, stateless user sessions
🔒 AES-256 encryption to protect sensitive fields such as Aadhaar/ID numbers at rest
🗄️ Optimized NoSQL database design for scalable user data management
🌐 RESTful API architecture ensuring clean, maintainable backend communication
🎨 Responsive and modern UI built with React and Tailwind CSS for a smooth user experience
🤖 AI-assisted development workflows for utility generation, testing, and documentation improvements

Designed with a real-world security approach, this system demonstrates proper handling of personal identity data, controlled access through protected routes, and secure retrieval of decrypted information only for authenticated users.

🛠️ 2. Tech Stack

Frontend

React (Vite)
React Router
Axios
Tailwind CSS (v4)

Backend

Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
AES-256 Encryption
AI Tools Used

ChatGPT (primary)
Generated utilities, tests, refactoring, and documentation

⚙️ 3. Setup & Run Instructions
📁 Project Structure
secure-profile-system/
│
├── backend/
├── frontend/
└── package.json (root)

▶️ Prerequisites

Ensure you have installed:
Node.js (LTS recommended)
MongoDB (local or Atlas)
npm / yarn

🚀 Step-by-Step Setup
1️⃣ Clone the Repository
git clone <REPO_URL>
cd secure-profile-system

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside /backend:

MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
ENCRYPTION_KEY=<32_characters_secret_key>


Start backend:

npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


App will run at:

http://localhost:5173

4️⃣ Run Both Frontend + Backend Together (Single Command)

From the root folder:

npm run dev


This command uses concurrently to start both servers.

📚 4. API Documentation
🔐 POST /api/auth/register

Registers a new user with encrypted Aadhaar.

Body:

{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "123456",
  "aadhaar": "123412341234"
}

🔐 POST /api/auth/login

Returns a JWT token.

Body:

{
  "email": "john@gmail.com",
  "password": "123456"
}


Response:

{
  "message": "Login successful",
  "token": "<jwt_token>"
}

🛡 GET /api/auth/profile (Protected)

Requires Authorization header:

Bearer <token>


Response:

{
  "name": "John Doe",
  "email": "john@gmail.com",
  "aadhaar": "123412341234"
}


(Aadhaar is decrypted at runtime)

🧱 5. Database Schema
User Model (MongoDB + Mongoose)
User {
  name: String,
  email: String,
  password: String (hashed),
  aadhaar: String (AES-256 encrypted),
  createdAt: Date
}

🔐 Security Notes

Passwords → hashed (bcrypt)

Aadhaar → AES-256 encrypted

JWT → used for stateless authentication

🤖 6. AI Tool Usage Log (MANDATORY)
✔️ AI-Assisted Tasks
| **Task**                        | **How AI Assisted**                                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Encryption Utility**          | AI-assisted in designing the AES-256 encryption/decryption logic, IV handling, and secure key usage. |
| **JWT Middleware**              | AI-assisted in shaping the token validation middleware for secure protected routes.                  |
| **Jest Test Cases**             | AI-assisted in generating structured test cases for encryption/decryption validation.                |
| **Auth Controller Refactoring** | AI-assisted in improving error handling, validation flow, and async logic.                           |
| **Frontend Error Messages**     | AI-assisted in writing clear and user-friendly error messages.                                       |
| **Tailwind UI Design**          | AI-assisted in suggesting modern, responsive UI design patterns and layouts.                         |
| **ProtectedRoute Component**    | AI-assisted in structuring route protection and token-based navigation.                              |
| **Documentation**               | AI-assisted in drafting and optimizing the README and project explanations.                          |

⭐ Effectiveness Score: 5/5

Reasoning:
AI drastically accelerated boilerplate code generation, encryption logic, routing structure, and documentation.
Debugging minor AI-generated syntax issues took minimal effort compared to time saved.

🧩 7. Evaluation Compliance Checklist
✔ Backend Implementation

Proper REST API design

JWT token-based auth

AES-256 encryption at rest

Decryption before response

Mongoose models & validations

Secure middleware

Error handling

✔ Frontend Implementation

Modern Tailwind UI

React Router for navigation

AuthContext for state

ProtectedRoute for security

Axios interceptor for token injection

✔ Code Quality

Modular folder structure

Clean code with comments

Reusable components

Clear separation of concerns

✔ Documentation (THIS README)

Instructions

API docs

Schema

AI usage

Clear, HR-friendly layout

✔ AI Tool Utilization
Integrated tools in a controlled and productive way
Logged tasks clearly