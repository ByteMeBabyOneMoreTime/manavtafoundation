import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      alert("Please fill all the fields");
      return;
    }
    setIsLoading(true);
    try {
      const url = "http://127.0.0.1:8000/login";
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await axios.post(
        url,
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            key: apiKey, // Add the API key as a custom header
          },
        },
      );

      // Fix: Access the message field from response.data
      const session_id = response.data.message;
      localStorage.setItem("session_id", session_id);
      alert("Login successful!");
      // Redirect or perform further actions after successful login
    } catch (err) {
      alert(
        "Login Error: " +
          (err.response?.data?.message || "An unknown error occurred"),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-center">
        <div className="bg-[#BBE319] p-6 rounded-t-lg">
          <img
            alt="Logo of The Emerging India Foundation, Lucknow Uttar Pradesh"
            src="logos.png"
            className="w-24 h-24 mx-auto"
          />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">Login</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-sm text-gray-600">
              Mobile Number or Email*:
            </label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="text"
              value={data.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#198C1A]"
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label htmlFor="password" className="block text-sm text-gray-600">
              Password*:
            </label>
            <input
              id="password"
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={data.password}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#198C1A]"
              required
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              id="show-password"
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              className="mr-2"
            />
            <label htmlFor="show-password" className="text-sm text-gray-600">
              Show Password
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#198C1A] text-white rounded-md hover:bg-[#6fcd17] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            No account?{" "}
            <a href="/register" className="text-[#b71c1c] hover:underline">
              Register
            </a>
          </p>
          <p>
            Forgot Password?{" "}
            <a
              href="/forgetpassword"
              className="text-[#b71c1c] hover:underline"
            >
              Reset Password
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
