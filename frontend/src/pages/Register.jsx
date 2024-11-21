import React, { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);

  // Simulating loader state
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate API call
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Username/Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
