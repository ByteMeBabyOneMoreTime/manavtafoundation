import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const session_id = localStorage.getItem("session_id");
      const user_id = localStorage.getItem("user_id");
      const apiKey = import.meta.env.VITE_API_KEY;

      if (!session_id) {
        navigate("/login");
        return;
      }

      try {
        // Fetch User Details
        console.log(session_id);
        console.log(user_id);
        console.log(apiKey);
        const userResponse = await axios.get(
          "https://manavtafoundation-sq6h.onrender.com/user",
          { session_key: session_id },
          {
            headers: {
              "Content-Type": "application/json",
              key: apiKey,
            },
          },
        );
        console.log(userResponse);
        setUserDetails(userResponse.data);

        // Fetch Order Details
        const orderResponse = await axios.get(
          `https://manavtafoundation-sq6h.onrender.com/products/order_details/${user_id}`,
          { session_key: session_id },
          {
            headers: {
              "Content-Type": "application/json",
              key: apiKey,
            },
          },
        );
        console.log(orderResponse);
        setOrderDetails(orderResponse.data.orders);

        setIsLoading(false);
      } catch (error) {
        console.error(
          "Error fetching profile data:",
          error.response ? error.response.data : error.message,
        );
        setError(
          error.response
            ? error.response.data.message
            : "Failed to load profile data",
        );
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [navigate]);

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading profile...</div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <p className="text-2xl text-red-600 mb-4">{error}</p>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // Render Profile
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* User Profile Section */}
          <div className="md:col-span-1 bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              My Profile
            </h1>
            {/* 
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Name</p>
                <p className="font-semibold">{userDetails.name}</p>
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-semibold">{userDetails.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Phone Number</p>
                <p className="font-semibold">{userDetails.phone_number}</p>
              </div>
              <div>
                <p className="text-gray-600">Member Since</p>
                <p className="font-semibold">
                  {new Date(userDetails.created_at).toLocaleDateString()}
                </p>
              </div>
            */}
          </div>
        </div>

        {/* Order History Section 
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Order History
            </h2>
            {orderDetails.length === 0 ? (
              <div className="text-center text-gray-600">No orders found</div>
            ) : (
              <div className="space-y-6">
                {orderDetails.map((order) => (
                  <div
                    key={order.order_id}
                    className="border-b pb-6 last:border-b-0"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">
                        Order #{order.order_id}
                      </h3>
                      <span
                        className={`font-bold ${
                          order.status === "Placed"
                            ? "text-green-600"
                            : "text-gray-600"
                        }`}
                      >
                        <strong>{order.status.toUpperCase()}</strong>
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600">Shipping Address</p>
                        <p className="font-semibold">
                          {order.address_line_1}, {order.address_line_2 || ""}
                          <br />
                          {order.city}, {order.state} - {order.pincode}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Payment Details</p>
                        <p className="font-semibold">
                          Total Amount: ₹{order.payment_amount.toLocaleString()}
                          <br />
                          Method: {order.payment_method}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-600 mb-2">Order Items</p>
                      <div className="space-y-2">
                        {order.items.map((item) => (
                          <div
                            key={item.product_name}
                            className="flex justify-between"
                          >
                            <span>{item.product_name}</span>
                            <span>
                              {item.quantity} x ₹{item.price} = ₹
                              {item.total_price.toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
          */}
      </div>
    </div>
  );
};

export default Profile;
