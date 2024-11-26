import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  // Get category ID from URL params
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

        // If categoryId is provided, use category-specific API
        if (categoryId) {
          response = await axios.get(
            `https://manavtafoundation-sq6h.onrender.com/products/filter/${categoryId}`,
          );
        } else {
          // If no category, fetch all products
          response = await axios.get(
            "https://manavtafoundation-sq6h.onrender.com/products/download",
          );
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
  }, [categoryId, sortOption]);

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
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            {categoryId
              ? `${categories.find((cat) => cat.id.toString() === categoryId)?.name || "Shop"}`
              : "Discover Our Plants"}
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
                    key={category.id}
                    to={`/shop/${category.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-all group"
                  >
                    <span className="text-gray-700 group-hover:text-green-600">
                      {category.name}
                    </span>
                  </Link>
                ))}
                {/* Option to clear category filter */}
                {categoryId && (
                  <Link
                    to="/shop"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-all group"
                  >
                    <span className="text-gray-700 group-hover:text-green-600">
                      Clear Filter
                    </span>
                  </Link>
                )}
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
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image || "/api/placeholder/400/320"}
                          alt={product.name}
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
                          {product.name}
                        </h3>
                        <p className="text-green-600 font-bold">
                          ₹{product.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
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
