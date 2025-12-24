<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">

</head>
<body>

<h1>🚀 Secure Profile & Access Control System (MERN Stack)</h1>
<p>A full-stack secure identity management system featuring <strong>JWT Authentication</strong>, <strong>AES-256 Encryption</strong>, <strong>Protected APIs</strong>, <strong>Tailwind UI</strong>, and <strong>AI-assisted development workflows</strong>.</p>

<hr>

<h2>📌 1. Project Overview</h2>
<p>
The <strong>Secure Profile & Access Control System</strong> is a MERN application designed to securely manage user identity data. 
Users can register, authenticate, and access a protected dashboard where sensitive details such as Aadhaar/ID numbers are encrypted and safely handled.
</p>

<p><strong>Key Features:</strong></p>
<ul>
    <li>🔐 JWT-based Authentication</li>
    <li>🔒 AES-256 Encryption for Aadhaar/ID</li>
    <li>🗄️ Scalable MongoDB Schema</li>
    <li>🌐 RESTful API Architecture</li>
    <li>🎨 Modern React + Tailwind UI</li>
    <li>🤖 AI-Assisted Utilities, Tests & Documentation</li>
</ul>

<hr>

<h2>🛠️ 2. Tech Stack</h2>

<p><span class="badge">⚛️ React (Vite)</span> 
<span class="badge">🔀 React Router</span>
<span class="badge">🌐 Axios</span>
<span class="badge">🎨 Tailwind CSS</span></p>

<p><span class="badge">🟩 Node.js</span>
<span class="badge">🚀 Express.js</span>
<span class="badge">🍃 MongoDB</span>
<span class="badge">🔐 JWT Auth</span>
<span class="badge">🔒 AES Encryption</span></p>

<p><strong>AI Tools Used:</strong> ChatGPT, Cursor AI, Google Gemini</p>

<hr>

<h2>⚙️ 3. Setup & Run Instructions</h2>

<h3>📁 Project Structure</h3>
<pre>
secure-profile-system/
│
├── backend/
├── frontend/
└── package.json
</pre>

<h3>▶️ Backend Setup</h3>
<pre>
cd backend
npm install
</pre>

<p>Create <code>.env</code>:</p>
<pre>
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
ENCRYPTION_KEY=32_character_key
</pre>

<h3>▶️ Frontend Setup</h3>
<pre>
cd ../frontend
npm install
npm run dev
</pre>

<h3>▶️ Run Both Together</h3>
<pre>
npm run dev
</pre>

<hr>

<h2>📚 4. API Documentation</h2>

<h3>🔐 POST /api/auth/register</h3>
<pre>
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "123456",
  "aadhaar": "123412341234"
}
</pre>

<h3>🔐 POST /api/auth/login</h3>
<pre>
{
  "email": "john@gmail.com",
  "password": "123456"
}
</pre>

<h3>🛡️ GET /api/auth/profile</h3>
<pre>
Authorization: Bearer &lt;token&gt;
</pre>

<pre>
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "aadhaar": "1234 1234 1234"
}
</pre>

<hr>

<h2>🧱 5. Database Schema</h2>

<pre>
{
  "name": "String",
  "email": "String",
  "password": "String (hashed)",
  "aadhaar": "String (AES-256 encrypted)",
  "createdAt": "Date"
}
</pre>

<hr>

<h2>🤖 6. AI Tool Usage Log</h2>

<table border="1" cellpadding="10">
<tr>
<th>Task</th>
<th>How AI Assisted</th>
</tr>

<tr>
<td>Encryption Utility</td>
<td>Helped design AES-256 logic, IV management & secure key handling</td>
</tr>

<tr>
<td>JWT Middleware</td>
<td>Assisted in token validation logic & protected routes</td>
</tr>

<tr>
<td>Jest Test Cases</td>
<td>Helped generate encryption/decryption tests</td>
</tr>

<tr>
<td>Auth Controller</td>
<td>Improved async flow & error handling</td>
</tr>

<tr>
<td>UI/UX</td>
<td>Suggested modern Tailwind-based UI enhancements</td>
</tr>

<tr>
<td>ProtectedRoute</td>
<td>Helped design authentication-based routing logic</td>
</tr>

<tr>
<td>Documentation</td>
<td>Assisted in writing and formatting README.md</td>
</tr>

</table>

<p><strong>⭐ AI Effectiveness Score: 4/5</strong></p>

<hr>

<h2>🧩 7. Evaluation Checklist</h2>

<ul>
    <li>✔ Backend: JWT, AES-256, Middleware, Error Handling</li>
    <li>✔ Frontend: Tailwind UI, AuthContext, Protected Routes</li>
    <li>✔ Documentation: Clear instructions, API docs, schema</li>
    <li>✔ AI Utilization: Helpful, controlled, productive</li>
</ul>

<hr>

<h2>🎯 Final Notes</h2>
<p>
This project demonstrates secure identity handling, encrypted data storage, modern React UI, scalable backend architecture, and AI-assisted engineering — suitable for real-world secure profile management systems.
</p>

</body>
</html>
