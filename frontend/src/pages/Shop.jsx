import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hardcoded data
const MOCK_PRODUCTS = [
  {
    _id: "1",
    plantname: "Peace Lily",
    price: 1299,
    image: "peace-lily.jpg",
    category: { _id: "1", categoryname: "Indoor Plants" },
  },
  {
    _id: "2",
    plantname: "Snake Plant",
    price: 899,
    image: "snake-plant.jpg",
    category: { _id: "1", categoryname: "Indoor Plants" },
  },
  {
    _id: "3",
    plantname: "Monstera Deliciosa",
    price: 2499,
    image: "monstera.jpg",
    category: { _id: "1", categoryname: "Indoor Plants" },
  },
  {
    _id: "4",
    plantname: "Rose Bush",
    price: 799,
    image: "rose.jpg",
    category: { _id: "2", categoryname: "Outdoor Plants" },
  },
  {
    _id: "5",
    plantname: "Herb Garden Kit",
    price: 1499,
    image: "herbs.jpg",
    category: { _id: "3", categoryname: "Herb Plants" },
  },
  {
    _id: "6",
    plantname: "Bonsai Tree",
    price: 3999,
    image: "bonsai.jpg",
    category: { _id: "4", categoryname: "Bonsai" },
  },
  {
    _id: "7",
    plantname: "Succulent Collection",
    price: 999,
    image: "succulent.jpg",
    category: { _id: "5", categoryname: "Succulents" },
  },
  {
    _id: "8",
    plantname: "Fiddle Leaf Fig",
    price: 2999,
    image: "fiddle-leaf.jpg",
    category: { _id: "1", categoryname: "Indoor Plants" },
  },
];

const MOCK_CATEGORIES = [
  { _id: "1", categoryname: "Indoor Plants", image: "indoor.jpg" },
  { _id: "2", categoryname: "Outdoor Plants", image: "outdoor.jpg" },
  { _id: "3", categoryname: "Herb Plants", image: "herbs.jpg" },
  { _id: "4", categoryname: "Bonsai", image: "bonsai.jpg" },
  { _id: "5", categoryname: "Succulents", image: "succulent.jpg" },
];

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories] = useState(MOCK_CATEGORIES);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [offset, setOffset] = useState(0);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sort products
  useEffect(() => {
    let sortedProducts = [...MOCK_PRODUCTS];

    if (sortOption === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      sortedProducts.sort((a, b) => a.plantname.localeCompare(b.plantname));
    } else if (sortOption === "name-desc") {
      sortedProducts.sort((a, b) => b.plantname.localeCompare(a.plantname));
    }

    setProducts(sortedProducts);
  }, [sortOption]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100">
      {/* Hero Section with Parallax */}
      <div
        className="relative h-[40vh] overflow-hidden"
        style={{
          backgroundImage: "url(bg-img/24.jpg)",
          backgroundPosition: `center ${offset * 0.5}px`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            Discover Our Plants
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Categories */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Categories
              </h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category._id}
                    to={`/shop/${category._id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-all group"
                  >
                    <span className="text-gray-700 group-hover:text-green-600">
                      {category.categoryname}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="md:w-3/4">
            {/* Sort Controls */}
            <div className="flex justify-end mb-6">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product, index) => (
                <div
                  key={product._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src="/api/placeholder/400/320"
                      alt={product.plantname}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors">
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                          <button className="flex-1 bg-white/90 hover:bg-white text-green-600 py-2 rounded-lg backdrop-blur-sm transition-colors">
                            Add to Cart
                          </button>
                          <button className="w-12 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-red-500 rounded-lg backdrop-blur-sm transition-colors">
                            ♥
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.plantname}
                    </h3>
                    <p className="text-green-600 font-bold">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-shadow"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-lg ${
                      currentPage === i + 1
                        ? "bg-green-500 text-white"
                        : "bg-white hover:bg-green-50"
                    } shadow hover:shadow-md transition-all`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-shadow"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
