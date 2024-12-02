import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();

  // States
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    // Shipping Address
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pinCode: "",

    // Payment Method
    paymentMethod: "cod",
    transactionId: "",
  });

  // Indian States Dropdown
  const INDIAN_STATES = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

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

        // Calculate total
        const cartTotal = fetchedCartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );
        setTotal(cartTotal);
      } catch (error) {
        console.error("Error processing cart:", error);
        setIsLoading(false);
      }
    };

    fetchCartDetails();
  }, []);

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form Validation
  const validateForm = () => {
    const { addressLine1, city, state, pinCode, paymentMethod, transactionId } =
      formData;

    if (!addressLine1 || !city || !state || !pinCode) {
      alert("Please fill in all required address fields");
      return false;
    }

    const pinCodeRegex = /^[1-9][0-9]{5}$/;
    if (!pinCodeRegex.test(pinCode)) {
      alert("Please enter a valid 6-digit PIN code");
      return false;
    }

    if (paymentMethod === "online" && !transactionId) {
      alert("Please enter transaction ID for online payment");
      return false;
    }

    return true;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for session_id before submitting
    const session_id = localStorage.getItem("session_id");
    const user_id = localStorage.getItem("user_id");

    if (!session_id) {
      // If no session_id, redirect to login
      alert("Please login to continue with your order.");
      navigate("/login");
      return;
    }

    if (!validateForm()) {
      return;
    }

    // Prepare order details
    const orderDetails = {
      session_key: session_id,
      user_id: user_id,
      address_line_1: formData.addressLine1,
      address_line_2: formData.addressLine2 || "",
      city: formData.city,
      state: formData.state,
      pincode: formData.pinCode,
      payment_method:
        formData.paymentMethod === "online"
          ? "Online Payment"
          : "Cash On Delivery",
      transaction_id: formData.transactionId || "",
      products: JSON.parse(localStorage.getItem("cart") || "[]").map(
        (item) => ({
          id: item.id,
          Qty: item.Qty,
        }),
      ),
    };

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await axios.post(
        "https://manavtafoundation-sq6h.onrender.com/products/order",
        orderDetails,
        {
          headers: {
            "Content-Type": "application/json",
            key: apiKey, // Add the API key as a custom header
          },
        },
      );

      // Clear cart after successful order
      localStorage.removeItem("cart");

      // Navigate to order confirmation
      navigate("/order");
    } catch (error) {
      console.error("Order submission error:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading checkout...</div>
      </div>
    );
  }

  // If cart is empty, show message
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <p className="text-2xl text-gray-600 mb-4">Your cart is empty</p>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Checkout Details
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Address Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    placeholder="Address Line 1"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    placeholder="Address Line 2 (Optional)"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Select State</option>
                      {INDIAN_STATES.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      placeholder="PIN Code"
                      pattern="[1-9][0-9]{5}"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Payment Method
                </h2>
                <div className="mb-4">
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="cod">Cash on Delivery</option>
                    <option value="online">Online Payment</option>
                  </select>
                </div>

                {/* Online Payment Section */}
                {formData.paymentMethod === "online" && (
                  <div>
                    <img
                      src="https://drive.google.com/thumbnail?id=1V7BQqmnGL4xA0C3MbWTDvtAbP3IlnNIH&sz=s4000"
                      alt="QR Code"
                      className="mx-auto mb-4 w-72 h-full object-cover"
                    />
                    <input
                      type="text"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      placeholder="Transaction ID"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white rounded-lg 
                           hover:bg-green-600 transition font-semibold"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>
            {/* Cart Items */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500">
                        ₹{item.price.toLocaleString()} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">₹0</span>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
