import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <div className="relative bg-green-800 text-white py-16 h-80">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('bg-img/24.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center py-10">{title}</h2>
        <nav className="flex justify-center">
          <ol className="flex items-center space-x-2">
            <li>
              <a
                href="/"
                className="text-green-300 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <span className="text-green-300 mx-2">/</span>
            </li>
            <li className="text-white">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
