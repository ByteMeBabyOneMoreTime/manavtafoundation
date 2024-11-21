import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-center">
        <div className="bg-[#BBE319] p-6 rounded-t-lg">
          <img
            alt="Logo of The Emerging India Foundation, Lucknow Uttar Pradesh"
            src="logos.png"
            className="w-24 h-24 mx-auto"
          />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">Login</h1>
        <div className="mt-4">
          <div className="mb-4 text-left">
            <label htmlFor="username" className="block text-sm text-gray-600">
              Mobile Number or Email*:
            </label>
            <input
              id="username"
              placeholder="Username or Email"
              type="text"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#198C1A]"
            />
          </div>

          <div className="mb-4 text-left">
            <label htmlFor="password" className="block text-sm text-gray-600">
              Password*:
            </label>
            <input
              id="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#198C1A]"
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

          <button className="w-full py-3 bg-[#198C1A] text-white rounded-md hover:bg-[#6fcd17] transition duration-200">
            Submit
          </button>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              No account?{" "}
              <a
                href="register.html"
                className="text-[#b71c1c] hover:underline"
              >
                Register
              </a>
            </p>
            <p>
              Forgot Password?{" "}
              <a
                href="forgetpassword.html"
                className="text-[#b71c1c] hover:underline"
              >
                Reset Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
