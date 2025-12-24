import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 shadow-lg px-6 py-3 flex justify-between items-center">
      <h1 className="text-white text-2xl font-semibold">Secure Profile System</h1>

      <div className="space-x-6 text-white text-lg">
        {!token ? (
          <>
            <Link className="hover:underline" to="/login">Login</Link>
            <Link className="hover:underline" to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link className="hover:underline" to="/profile">Profile</Link>
            <button 
              onClick={logout}
              className="bg-white text-blue-600 px-3 py-1 rounded-md font-semibold hover:bg-gray-200"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
