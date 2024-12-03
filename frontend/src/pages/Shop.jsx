import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import "../App.css";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [wishlist, setWishlist] = useState([]);
  const [currentCategoryName, setCurrentCategoryName] = useState("All Items");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const { categoryId } = useParams();

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://manavtafoundation-sq6h.onrender.com/products/categories",
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let response;

        if (categoryId) {
          response = await axios.get(
            `https://manavtafoundation-sq6h.onrender.com/products/filter/${categoryId}`,
          );
          // Update current category name when a category is selected
          const selectedCategory = categories.find(
            (cat) => cat.id.toString() === categoryId,
          );
          setCurrentCategoryName(
            selectedCategory ? selectedCategory.name : "All Items",
          );
        } else {
          response = await axios.get(
            "https://manavtafoundation-sq6h.onrender.com/products/download",
          );
          setCurrentCategoryName("All Items");
        }

        let filteredProducts = response.data.data;

        // Sort products
        if (sortOption === "price-asc") {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-desc") {
          filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortOption === "name-asc") {
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "name-desc") {
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, sortOption, categories]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Wishlist Toggle
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  // Add to Cart Functionality
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex >= 0) {
      cart[productIndex].Qty += 1;
    } else {
      cart.push({ id: product.id, Qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added ${product.name} to cart.`);
    console.log(`Added ${product.name} to cart.`);
  };

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
      {/* Hero Section with Persistent Background */}
      <div className="relative h-[40vh] overflow-hidden hero-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg relative z-10">
            SHOP
          </h1>
        </div>
      </div>
      {message && (
        <div
          className={`absolute top-4 right-4 p-4 rounded-md text-white ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Dynamic Category Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {currentCategoryName}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Categories */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Categories
              </h2>
              <div className="space-y-3">
                <Link
                  to="/shop"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-all group"
                >
                  <span className="text-gray-700 group-hover:text-green-600">
                    All Items
                  </span>
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/shop/${category.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-all group"
                  >
                    <span className="text-gray-700 group-hover:text-green-600">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="md:w-3/4">
            {/* Sort Controls */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {products.length} Product{products.length !== 1 && "s"} Found
              </p>
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
            {products.length === 0 ? (
              <div className="text-center text-gray-600 py-8">
                No products found in this category.
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group relative"
                    >
                      {/* Rest of the product card remains the same */}
                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                      >
                        <Heart
                          className={`w-6 h-6 ${
                            wishlist.includes(product.id)
                              ? "text-red-500 fill-current"
                              : "text-gray-500"
                          }`}
                        />
                      </button>

                      {/* Product Image with Hover Effects */}
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image || "/api/placeholder/400/320"}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors">
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => addToCart(product)}
                                className="flex-1 bg-white/90 hover:bg-white text-green-600 py-2 rounded-lg backdrop-blur-sm transition-colors flex items-center justify-center space-x-2"
                              >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Add to Cart</span>
                              </button>
                              <button
                                onClick={() =>
                                  navigate(`/product/${product.id}`)
                                }
                                className="w-12 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-green-600 rounded-lg backdrop-blur-sm transition-colors"
                              >
                                <Eye className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="p-4">
                        <Link
                          to={`/product/${product.id}`}
                          className="block hover:text-green-600 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-green-600 font-bold">
                          ₹{product.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {product.description}
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
