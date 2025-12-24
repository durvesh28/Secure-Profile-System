import { useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", formData);
      login(res.data.token);
      navigate("/profile");
    } catch {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="bg-white w-96 p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full p-3 border rounded-md" type="email" name="email" placeholder="Email" onChange={handleChange} required />

          <input className="w-full p-3 border rounded-md" type="password" name="password" placeholder="Password" onChange={handleChange} required />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700" type="submit">
            Login
          </button>
        </form>

        {message && <p className="text-center mt-3 text-red-600 font-medium">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
