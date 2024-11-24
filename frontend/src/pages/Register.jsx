import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Add this import

const Register = () => {
  const navigate = useNavigate(); // Add navigation hook
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);
  const url = "http://127.0.0.1:8000/register";
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (data.password !== data.confirmPassword) {
      setLoading(false);
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }

    try {
      await axios.post(
        url,
        {
          name: data.name,
          phone_number: data.phone_number,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            key: apiKey,
          },
        },
      );
      setLoading(false);
      setMessage({ type: "success", text: "User registered successfully!" });

      // Add a small delay before redirecting to show the success message
      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 1500);
    } catch (err) {
      setLoading(false);
      setMessage({
        type: "error",
        text:
          err.response?.data?.message ||
          "An error occurred during registration.",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-120 md:w-96">
        <h1 className="text-2xl font-semibold text-center text-red-600 mb-6">
          Register
        </h1>

        {loading && (
          <div className="flex justify-center items-center mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
          </div>
        )}

        {message && (
          <div
            className={`absolute top-4 right-4 p-4 rounded-md text-white ${
              message.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={data.name}
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Username/Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={data.phone_number}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={data.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={data.password}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Password Confirmation"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={data.confirmPassword}
            required
          />

          <div className="bg-gray-50 p-4 rounded-md border border-gray-300">
            <h3 className="text-red-600 font-semibold mb-3">
              User ID and Password Rules
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-700">
                User ID must be at least 6 characters long and can contain
                letters, numbers, and special characters.
              </li>
              <li className="text-gray-700">
                Password must be at least 4 characters long.
              </li>
              <li className="text-gray-700">
                Do not share your details with anyone else.
              </li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
