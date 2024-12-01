import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-green-700 p-4 flex justify-between items-center w-full">
      <div className="text-white font-bold text-3xl"></div>

      {/* Navigation Links */}
      <div
        className={`flex flex-col md:flex-row md:space-x-8 ${menuOpen ? "block" : "hidden"} md:block`}
      >
        <Link
          to="/"
          className="text-white text-lg font-bold hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="text-white text-lg font-bold hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          ABOUT
        </Link>
        <Link
          to="/services"
          className="text-white text-lg font-bold hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          SERVICES
        </Link>
        <Link
          to="/gallery"
          className="text-white text-lg font-bold hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          GALLERY
        </Link>
        <Link
          to="/shop"
          className="text-white text-lg font-bold hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          SHOP
        </Link>
        <Link
          to="/news"
          className="text-white text-lg font-bold hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          NEWS
        </Link>
        <Link
          to="/contact"
          className="text-white text-lg font-bold hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          CONTACT US
        </Link>

        {/* Mobile Cart and Heart Buttons */}
        <div className="md:hidden flex space-x-4 mt-4">
          <Link to="/cart" className="w-full">
            <button className="bg-green-700 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 w-full">
              🛒 Cart
            </button>
          </Link>
          <button className="bg-green-700 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 w-full">
            ❤️ Favorites
          </button>
        </div>
      </div>

      {/* Desktop Cart and Heart Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link to="/cart">
          <button className="bg-green-700 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
            🛒
          </button>
        </Link>
        <button className="bg-green-700 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
          ❤️
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
