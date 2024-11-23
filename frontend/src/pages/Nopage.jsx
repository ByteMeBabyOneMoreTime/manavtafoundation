import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

const NoPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            404
          </h1>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto my-8"
        />

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Oops! It seems you've wandered into uncharted territory. The page
            you're looking for doesn't exist.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-medium transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Background Animated Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoPage;
