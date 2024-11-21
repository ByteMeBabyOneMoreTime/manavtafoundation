import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Loader2 } from "lucide-react";

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <Loader2 className="w-16 h-16 text-green-500 animate-spin" />
  </div>
);

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
    <SocialLinks />
    <div className="text-center">
      <div className="font-semibold">⚡ News & Updates</div>
      <div className="text-red-600">
        New products arriving soon! Stay tuned!
      </div>
    </div>
    <div className="font-bold">Helpline: +91-9918771888</div>
  </header>
);

const MainContent = () => (
  <section className="container mx-auto px-4 py-12 grid grid-cols-12 items-center">
    {/* Logo on the right */}
    <div className="col-span-2 flex justify-end">
      <img
        src="logos.png"
        alt="Manavta Nursery Logo"
        className="w-40 h-40 object-contain"
      />
    </div>

    {/* Heading in the center */}
    <div className="col-span-8 text-center">
      <h1 className="text-4xl font-bold text-green-800">MANAVTA FOUNDATION</h1>
      <p className="text-xl text-red-600 mt-2 animate-pulse">
        मिशन घर घर हरियाली से गरीब के घर खुशहाली
      </p>
    </div>

    {/* Buttons on the left */}
    <div className="col-span-2 flex justify-start space-x-4">
      <a
        href="/login"
        className="py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        LOGIN
      </a>
      <a
        href="/register"
        className="py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        REGISTER
      </a>
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MainContent />
        </>
      )}
    </div>
  );
};

export default MainHeader;
