import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Heart, ChevronLeft, Minus, Plus, X } from "lucide-react";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://manavtafoundation-sq6h.onrender.com/products/download",
        );

        const allProducts = response.data.data;
        const selectedProduct = allProducts.find(
          (prod) => prod.id === parseInt(productId),
        );

        if (selectedProduct) {
          setProduct(selectedProduct);
          setMainImage(selectedProduct.image);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleImageChange = (image) => {
    setMainImage(image);
  };

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const productIndex = cart.findIndex((item) => item.id === product.id);

      if (productIndex >= 0) {
        cart[productIndex].Qty += quantity;
      } else {
        cart.push({ id: product.id, Qty: quantity });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} has been added to your cart.`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600 flex items-center">
          <Link to="/" className="hover:text-green-600 mr-2">
            HOME
          </Link>
          <ChevronLeft size={16} className="mr-2" />
          <Link to="/shop" className="hover:text-green-600 mr-2">
            Shop
          </Link>
          <ChevronLeft size={16} className="mr-2" />
          <span>{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">
          {/* Image Section */}
          <div>
            <div className="mb-6">
              <img
                src={mainImage || "/api/placeholder/600/400"}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-xl shadow-md cursor-pointer"
                onClick={openImageModal}
              />
            </div>

            {/* Thumbnail Section */}
            <div className="flex space-x-4">
              {[product.image, ...(product.additionalImages || [])].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img || "/api/placeholder/100/100"}
                    alt={`${product.name} view ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                      mainImage === img ? "border-2 border-green-500" : ""
                    }`}
                    onClick={() => handleImageChange(img)}
                  />
                ),
              )}
            </div>
          </div>

          {/* Image Modal */}
          {isImageModalOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
              onClick={closeImageModal}
            >
              <div
                className="relative max-w-4xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-10 right-0 z-60 text-white"
                  onClick={closeImageModal}
                >
                  <X size={32} />
                </button>
                <img
                  src={mainImage || "/api/placeholder/600/400"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}

          {/* Details Section */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-600 uppercase">
                {product.categories.join(", ")}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-4">{product.description}</p>

              {/* Pricing */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-green-600">
                  ₹{product.price.toLocaleString()}
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center mb-4">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="bg-gray-100 p-2 rounded-l-lg"
                >
                  <Minus size={20} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border-t border-b bg-white py-2"
                />
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="bg-gray-100 p-2 rounded-r-lg"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart(product);
                    navigate(`/checkout`);
                  }}
                  className="flex-1 bg-green-100 text-green-700 py-3 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center"
                >
                  Buy Now
                </button>
                <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <Heart className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
