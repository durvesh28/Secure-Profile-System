import { useState } from "react";
import api from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    aadhaar: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", formData);
      setMessage("Registration Successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="bg-white w-96 p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full p-3 border rounded-md" name="name" placeholder="Full Name" onChange={handleChange} required />

          <input className="w-full p-3 border rounded-md" name="email" type="email" placeholder="Email" onChange={handleChange} required />

          <input className="w-full p-3 border rounded-md" name="password" type="password" placeholder="Password" onChange={handleChange} required />

          <input className="w-full p-3 border rounded-md" name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} required />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700" type="submit">
            Register
          </button>
        </form>

        {message && <p className="text-center mt-3 text-green-600 font-medium">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
