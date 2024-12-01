import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch cart and product details
  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        // Retrieve cart from localStorage
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

        // Fetch product details for each cart item
        const productPromises = storedCart.map(async (cartItem) => {
          try {
            const response = await axios.get(
              `https://manavtafoundation-sq6h.onrender.com/products/download/${cartItem.id}`,
            );
            return {
              ...response.data.data[0],
              quantity: cartItem.Qty, // Use the quantity from localStorage
            };
          } catch (error) {
            console.error(`Error fetching product ${cartItem.id}:`, error);
            return null;
          }
        });

        // Filter out any failed fetches
        const fetchedCartItems = (await Promise.all(productPromises)).filter(
          (item) => item !== null,
        );

        setCartItems(fetchedCartItems);
        setIsLoading(false);
      } catch (error) {
        console.error("Error processing cart:", error);
        setIsLoading(false);
      }
    };

    fetchCartDetails();
  }, []);

  // Calculate total whenever cart items change
  useEffect(() => {
    const cartTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setTotal(cartTotal);
  }, [cartItems]);

  // Update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    // Update cart items in state
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedCart);

    // Update localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedStoredCart = storedCart.map((cartItem) =>
      cartItem.id === id ? { ...cartItem, Qty: newQuantity } : cartItem,
    );
    localStorage.setItem("cart", JSON.stringify(updatedStoredCart));
  };

  // Remove item from cart
  const removeItem = (id) => {
    // Remove from state
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);

    // Remove from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedStoredCart = storedCart.filter(
      (cartItem) => cartItem.id !== id,
    );
    localStorage.setItem("cart", JSON.stringify(updatedStoredCart));
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading cart...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <p className="text-2xl text-gray-600">Your cart is empty</p>
            <button
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              onClick={() => {
                /* Navigate to shop */
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items Column */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg p-4 flex items-center hover:shadow-xl transition"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-6"
                  />

                  {/* Product Details */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-green-600 font-bold">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="ml-6 text-right">
                    <p className="font-bold text-gray-800">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Column */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">₹0</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <Link to="/checkout">
                <button
                  className="w-full mt-6 py-3 bg-green-500 text-white rounded-lg 
                    hover:bg-green-600 transition font-semibold"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
