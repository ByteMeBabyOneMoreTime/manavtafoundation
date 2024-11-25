import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 4;

  // Fetch blog posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://manavtafoundation-sq6h.onrender.com/news/download",
          {
            headers: {
              "Content-Type": "application/json",
              key: import.meta.env.VITE_API_KEY,
            },
          },
        );
        console.log(response);
        // Extract data array from the response
        const postsData = response.data.data || [];
        setPosts(postsData);
      } catch (err) {
        setError("Failed to fetch blog posts");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.querySelector(".parallax-bg");
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageCount = Math.ceil(posts.length / itemsPerPage);
  const slicedPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div
          className="parallax-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(bg-img/24.jpg)",
            transform: "translateZ(0)",
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            समाचार
          </motion.h1>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-2 text-sm md:text-base"
          >
            <Link
              to="/"
              className="hover:text-green-400 transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              होम
            </Link>
            <span>/</span>
            <span className="text-green-400">ब्लॉग</span>
          </motion.nav>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {slicedPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.media_url}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/600/400";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {post.description}
                  </p>

                  <button className="mt-4 inline-flex items-center text-green-600 hover:text-green-700 transition-colors duration-300">
                    और पढ़ें
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {[...Array(pageCount)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                      currentPage === index + 1
                        ? "bg-green-500 text-white shadow-lg"
                        : "bg-white text-gray-700 shadow-md hover:shadow-lg"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                  }
                  disabled={currentPage === pageCount}
                  className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
