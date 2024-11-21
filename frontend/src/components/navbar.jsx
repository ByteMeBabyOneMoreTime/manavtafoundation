import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-green-700 p-4 flex justify-between items-center w-full">
      <div className="text-white font-bold text-2xl">LOGO</div>

      {/* Navigation Links */}
      <div
        className={`flex flex-col md:flex-row md:space-x-8 ${menuOpen ? "block" : "hidden"} md:block`}
      >
        <a
          href="index.html"
          className="text-white hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          HOME
        </a>
        <a
          href="about.html"
          className="text-white hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          ABOUT
        </a>
        <a
          href="services.html"
          className="text-white hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          SERVICES
        </a>
        <a
          href="gallery.html"
          className="text-white hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          GALLERY
        </a>
        <a
          href="workandportfo.html"
          className="text-white hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          OUR WORK & PORTFOLIO
        </a>
        <a
          href="index (5).html"
          className="text-white hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          SHOP
        </a>
        <a
          href="blogs.html"
          className="text-white hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          NEWS
        </a>
        <a
          href="contact.html"
          className="text-white hover:bg-green-500 py-2 px-4 rounded-md transition duration-300"
        >
          CONTACT US
        </a>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
          🛒
        </button>
        <button className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
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
