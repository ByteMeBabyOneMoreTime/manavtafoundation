import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Hardcoded Cart Items
const HARDCODED_CART_ITEMS = [
  {
    id: 1,
    name: "Birthday special money plant",
    price: 79,
    quantity: 2,
    image: "https://iili.io/2cVik1S.th.pn",
  },
  {
    id: 2,
    name: "5 Best Indoor Plants Pack (Pack of 5)",
    price: 1159,
    quantity: 1,
    image: "https://iili.io/2cVQErB.th.png",
  },
];

const Checkout = () => {
  const navigate = useNavigate();

  // Calculate Total (Hardcoded)
  const HARDCODED_TOTAL = HARDCODED_CART_ITEMS.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Form State
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Address Details
    addressLine1: "",
    addressLine2: "",
    locality: "",
    city: "",
    state: "",
    pinCode: "",

    // Payment Method
    paymentMethod: "online",
  });

  // States Dropdown
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
    const {
      firstName,
      lastName,
      email,
      phone,
      addressLine1,
      city,
      state,
      pinCode,
    } = formData;

    // Basic validation
    if (!firstName || !lastName) {
      alert("Please enter your full name");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number");
      return false;
    }

    if (!addressLine1 || !city || !state || !pinCode) {
      alert("Please fill in all required address fields");
      return false;
    }

    const pinCodeRegex = /^[1-9][0-9]{5}$/;
    if (!pinCodeRegex.test(pinCode)) {
      alert("Please enter a valid 6-digit PIN code");
      return false;
    }

    return true;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Prepare order details
    const orderDetails = {
      ...formData,
      items: HARDCODED_CART_ITEMS,
      totalAmount: HARDCODED_TOTAL,
    };

    // TODO: Integrate with backend order submission
    console.log("Order Details:", orderDetails);

    // Simulate order placement
    alert("Order placed successfully!");

    // Navigate to order confirmation or home page
    navigate("/order");
  };

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
              {/* Personal Details Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Personal Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

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
                      name="locality"
                      value={formData.locality}
                      onChange={handleInputChange}
                      placeholder="Locality"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
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
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === "online"}
                      onChange={handleInputChange}
                      className="form-radio text-green-500"
                    />
                    <span>Online Payment</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleInputChange}
                      className="form-radio text-green-500"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
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
              {HARDCODED_CART_ITEMS.map((item) => (
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
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{HARDCODED_TOTAL.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
