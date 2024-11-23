import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ChevronLeft, ChevronRight } from "lucide-react";

// Sample blog posts data
// Sample blog posts data with Lorem Ipsum
const SAMPLE_POSTS = [
  {
    _id: "1",
    blogname: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "blog1.jpg",
  },
  {
    _id: "2",
    blogname: "Consectetur adipiscing elit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "blog2.jpg",
  },
  {
    _id: "3",
    blogname: "Sed do eiusmod tempor",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    image: "blog3.jpg",
  },
  {
    _id: "4",
    blogname: "Ut enim ad minim veniam",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
    image: "blog4.jpg",
  },
  {
    _id: "5",
    blogname: "Duis aute irure dolor",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    image: "blog5.jpg",
  },
  {
    _id: "6",
    blogname: "Excepteur sint occaecat",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
    image: "blog6.jpg",
  },
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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

  const pageCount = Math.ceil(SAMPLE_POSTS.length / itemsPerPage);
  const slicedPosts = SAMPLE_POSTS.slice(
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
            Latest News
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
              Home
            </Link>
            <span>/</span>
            <span className="text-green-400">Blog</span>
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
                key={post._id}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`/api/placeholder/600/400`}
                    alt={post.blogname}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {post.blogname}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {post.description}
                  </p>

                  <button className="mt-4 inline-flex items-center text-green-600 hover:text-green-700 transition-colors duration-300">
                    Read More
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
