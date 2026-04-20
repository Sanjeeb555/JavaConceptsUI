import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import api from "../lib/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch only the user matching the provided email (server-side filter).
      // NOTE: Password comparison here is a temporary measure while a proper
      // backend auth endpoint is not yet available. In production, credential
      // validation and token issuance must be done server-side.
      const { data } = await api.get(
        `/users?email=${encodeURIComponent(formData.email)}`
      );

      const currentUser = data[0];

      if (!currentUser) {
        toast.error("Invalid Email");
        return;
      }

      if (currentUser.password !== formData.password) {
        toast.error("Invalid Password");
        return;
      }

      localStorage.setItem("jwt_token", currentUser.id);
      window.dispatchEvent(new Event("authChanged"));
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-blue-50 to-blue-100">
      
      <div className="lg:w-1/2 flex items-center justify-center py-20 px-10 bg-blue-600 text-white text-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate-pulse">
            Hello, Friend!
          </h2>
          <p className="text-lg mb-6">
            Enter your personal details and start your journey with us.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            REGISTER
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-center justify-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-white rounded-xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
            LOGIN
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Use your email and password
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer hover:text-blue-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-600 transition shadow-md"
            >
              LOGIN
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;