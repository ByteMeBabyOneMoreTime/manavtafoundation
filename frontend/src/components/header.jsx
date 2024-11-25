import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const SocialLinks = () => (
  <div className="flex space-x-4">
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

const Header = () => (
  <header className="bg-yellow-400 p-3 flex flex-wrap justify-between items-center text-gray-800">
    {/* Social Links */}
    <div className="w-full sm:w-auto mb-2 sm:mb-0">
      <SocialLinks />
    </div>

    {/* News Section with Slider */}
    <div className="text-center w-full sm:w-auto mb-2 sm:mb-0 overflow-hidden">
      <div className="font-semibold">⚡ News & Updates</div>
      <div className="relative overflow-hidden h-6 w-80 sm:w-[40rem] mx-auto">
        <div className="absolute w-full h-full flex items-center whitespace-nowrap animate-slide">
          <span className="text-red-600 font-medium">
            Latest Updates: New products arriving soon! Stay tuned! | Exciting
            news coming up!
          </span>
        </div>
      </div>
    </div>

    {/* Helpline */}
    <div className="font-bold w-full sm:w-auto text-center sm:text-right">
      Helpline: +91-9918771888
    </div>
  </header>
);

const MainContent = () => (
  <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
    {/* Logo on the right */}
    <div className="md:col-span-2 flex justify-center md:justify-end">
      <img
        src="logos.png"
        alt="Manavta Nursery Logo"
        className="w-32 h-32 md:w-40 md:h-40 object-contain"
      />
    </div>

    {/* Heading in the center */}
    <div className="md:col-span-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800">
        MANAVTA NURSERY
      </h1>
      <p className="text-lg md:text-xl text-red-600 mt-2 animate-pulse">
        मिशन घर घर हरियाली से गरीब के घर खुशहाली
      </p>
    </div>

    {/* Buttons on the left */}
    <div className="md:col-span-2 flex justify-center md:justify-start space-x-4">
      <Link
        to="/register"
        className="py-2 px-4 md:px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        REGISTER
      </Link>
      <Link
        to="/login"
        className="py-2 px-4 md:px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        LOGIN
      </Link>
    </div>
  </section>
);

const MainHeader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div className="font-sans text-gray-900">
      <>
        <Header />
        <MainContent />
      </>
    </div>
  );
};

export default MainHeader;
