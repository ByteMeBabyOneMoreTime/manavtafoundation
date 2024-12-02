import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const SocialLinks = () => (
  <div className="hidden sm:flex space-x-4">
    <a
      href="https://www.facebook.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-blue-600"
    >
      <Facebook className="w-6 h-6" />
    </a>
    <a
      href="https://twitter.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-blue-400"
    >
      <Twitter className="w-6 h-6" />
    </a>
    <a
      href="https://www.instagram.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-pink-600"
    >
      <Instagram className="w-6 h-6" />
    </a>
    <a
      href="https://www.linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-blue-700"
    >
      <Linkedin className="w-6 h-6" />
    </a>
  </div>
);

const Header = () => {
  return (
    <header className="bg-yellow-400 p-3 flex flex-wrap justify-between items-center text-gray-800">
      {/* Social Links - Hidden on mobile */}
      <div className="hidden sm:block w-full sm:w-auto mb-2 sm:mb-0">
        <SocialLinks />
      </div>

      {/* News Section with Slider */}
      <div className="text-center w-full sm:w-auto mb-2 sm:mb-0 overflow-hidden">
        <div className="font-semibold">⚡ News & Updates</div>
        <div className="relative overflow-hidden h-6 w-full sm:w-[40rem] mx-auto">
          <div className="absolute w-full h-full flex items-center whitespace-nowrap animate-slide">
            <span className="text-red-600 font-medium text-sm sm:text-base">
              Latest Updates: New products arriving soon! Stay tuned! | Exciting
              news coming up!
            </span>
          </div>
        </div>
      </div>

      {/* Helpline - Hidden on mobile */}
      <div className="hidden sm:block font-bold w-full sm:w-auto text-center sm:text-right text-sm">
        Helpline: +91-9918771888
      </div>
    </header>
  );
};

const MainContent = ({ displayText }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("session_id"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("session_id");
    setIsLoggedIn(false);
  };

  return (
    <section className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
      {/* Logo */}
      <div className="flex justify-center sm:w-1/4">
        <img
          src="logos.png"
          alt="Manavta Nursery Logo"
          className="w-24 h-24 md:w-36 md:h-36 object-contain"
        />
      </div>

      {/* Heading */}
      <div className="text-center sm:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-800">
          MANAVTA NURSERY
        </h1>

        {/* Mobile Tagline - Shown only on mobile */}
        <div className="sm:hidden text-red-600 font-medium text-sm mt-2">
          {displayText} <span className="animate-pulse">|</span>
        </div>

        {/* Desktop Tagline - Hidden on mobile */}
        <p className="hidden sm:block text-lg md:text-xl text-red-600 mt-1 min-h-[30px]">
          {displayText} <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center sm:w-1/4 space-x-2">
        {isLoggedIn ? (
          <>
            <Link
              to="/"
              className="py-1 px-3 md:py-2 md:px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-xs sm:text-sm md:text-base"
            >
              PROFILE
            </Link>
            <button
              onClick={handleLogout}
              className="py-1 px-3 md:py-2 md:px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-xs sm:text-sm md:text-base"
            >
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="py-1 px-3 md:py-2 md:px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-xs sm:text-sm md:text-base"
            >
              REGISTER
            </Link>
            <Link
              to="/login"
              className="py-1 px-3 md:py-2 md:px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-xs sm:text-sm md:text-base"
            >
              LOGIN
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

const MainHeader = () => {
  const [displayText, setDisplayText] = useState("");
  const taglines = [
    "मिशन घर घर हरियाली से गरीब के घर खुशहाली",
    "हर पौधा, एक नई आशा",
    "पर्यावरण संरक्षण हमारा कर्तव्य",
  ];
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    let currentText = "";
    let index = 0;
    const currentTagline = taglines[currentTaglineIndex];

    const typingEffect = setInterval(() => {
      if (index < currentTagline.length) {
        currentText += currentTagline[index];
        setDisplayText(currentText);
        index++;
      } else {
        // Wait for 2 seconds, then clear and move to next tagline
        setTimeout(() => {
          setDisplayText("");
          setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        }, 2000);
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, [currentTaglineIndex]);

  return (
    <div className="font-sans text-gray-900">
      <>
        <Header />
        <MainContent displayText={displayText} />
      </>
    </div>
  );
};

export default MainHeader;
